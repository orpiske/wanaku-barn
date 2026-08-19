package ai.wanaku.operator.util;

import java.util.List;
import java.util.Map;
import io.fabric8.kubernetes.api.model.EnvVar;
import io.fabric8.kubernetes.api.model.ObjectMetaBuilder;
import io.fabric8.kubernetes.api.model.apps.Deployment;
import io.fabric8.kubernetes.api.model.networking.v1.Ingress;
import io.fabric8.openshift.api.model.Route;
import ai.wanaku.operator.wanaku.WanakuRouter;
import ai.wanaku.operator.wanaku.WanakuRouterSpec;
import ai.wanaku.operator.wanaku.WanakuTypes;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

class RouterResourceFactoryTest {

    @Test
    void backendDeploymentHasNoAuthEnvVars() {
        WanakuRouter router = createRouter(null);
        Deployment deployment = RouterResourceFactory.makeDesiredRouterBackendDeployment(router, null);

        assertNull(getEnvValue(deployment, "AUTH_SERVER"));
        assertNull(getEnvValue(deployment, "AUTH_PROXY"));
        assertNull(getEnvValue(deployment, "AUTH_REALM"));
    }

    @Test
    void customEnvVarsFromRouterSpec() {
        WanakuRouterSpec.RouterSpec routerSpec = new WanakuRouterSpec.RouterSpec();
        WanakuTypes.EnvVar customVar = new WanakuTypes.EnvVar();
        customVar.setName("MY_VAR");
        customVar.setValue("my_value");
        routerSpec.setEnv(List.of(customVar));

        WanakuRouter router = createRouter(routerSpec);
        Deployment deployment = RouterResourceFactory.makeDesiredRouterBackendDeployment(router, null);

        assertEquals("my_value", getEnvValue(deployment, "MY_VAR"));
    }

    // ── Praxis Ingress factory tests ─────────────────────────────────────────

    @Test
    void praxisIngressTargetsPort8081() {
        WanakuRouter router = createRouter(null);
        Ingress ingress = RouterResourceFactory.makePraxisIngress(router, "wanaku.example.com");
        assertEquals(
                8081,
                ingress.getSpec()
                        .getRules()
                        .getFirst()
                        .getHttp()
                        .getPaths()
                        .getFirst()
                        .getBackend()
                        .getService()
                        .getPort()
                        .getNumber());
    }

    @Test
    void praxisIngressTargetsPraxisService() {
        WanakuRouter router = createRouter(null);
        Ingress ingress = RouterResourceFactory.makePraxisIngress(router, "wanaku.example.com");
        assertEquals(
                "praxis-test-router",
                ingress.getSpec()
                        .getRules()
                        .getFirst()
                        .getHttp()
                        .getPaths()
                        .getFirst()
                        .getBackend()
                        .getService()
                        .getName());
    }

    @Test
    void praxisIngressWithTlsSecretName() {
        WanakuTypes.TlsSpec tls = new WanakuTypes.TlsSpec();
        tls.setSecretName("wanaku-tls");
        WanakuRouter router = createRouterWithExposure(null, "nginx", null, tls);
        Ingress ingress = RouterResourceFactory.makePraxisIngress(router, "wanaku.example.com");
        assertNotNull(ingress.getSpec().getTls());
        assertEquals(1, ingress.getSpec().getTls().size());
        assertEquals("wanaku-tls", ingress.getSpec().getTls().getFirst().getSecretName());
    }

    @Test
    void praxisIngressWithIngressClassName() {
        WanakuRouter router = createRouterWithExposure(null, "nginx", null, null);
        Ingress ingress = RouterResourceFactory.makePraxisIngress(router, "wanaku.example.com");
        assertEquals("nginx", ingress.getSpec().getIngressClassName());
    }

    @Test
    void praxisIngressWithAnnotationsMergesThem() {
        Map<String, String> annotations = Map.of("cert-manager.io/cluster-issuer", "letsencrypt-prod");
        WanakuRouter router = createRouterWithExposure(null, null, annotations, null);
        Ingress ingress = RouterResourceFactory.makePraxisIngress(router, "wanaku.example.com");
        assertNotNull(ingress.getMetadata().getAnnotations());
        assertEquals("letsencrypt-prod", ingress.getMetadata().getAnnotations().get("cert-manager.io/cluster-issuer"));
    }

    // ── Praxis Route factory tests ───────────────────────────────────────────

    @Test
    void praxisRouteTargetsPraxisService() {
        WanakuRouter router = createRouter(null);
        Route route = RouterResourceFactory.makePraxisExternalRoute(router);
        assertEquals("praxis-test-router", route.getSpec().getTo().getName());
    }

    @Test
    void praxisRouteTargetsPort8081() {
        WanakuRouter router = createRouter(null);
        Route route = RouterResourceFactory.makePraxisExternalRoute(router);
        assertEquals("8081-tcp", route.getSpec().getPort().getTargetPort().getStrVal());
    }

    @Test
    void praxisRouteWithEdgeTls() {
        WanakuTypes.TlsSpec tls = new WanakuTypes.TlsSpec();
        tls.setTermination(WanakuTypes.TlsTermination.EDGE);
        WanakuRouter router = createRouterWithExposure(WanakuTypes.ExposureType.ROUTE, null, null, tls);
        Route route = RouterResourceFactory.makePraxisExternalRoute(router);
        assertNotNull(route.getSpec().getTls());
        assertEquals("edge", route.getSpec().getTls().getTermination());
    }

    // ── Annotation env var tests ──────────────────────────────────────────────

    @Test
    void annotationEnvVarAddsNewVar() {
        WanakuRouter router = createRouter(null, Map.of("env.wanaku.ai/MY_ANNOTATION_VAR", "injected"));
        Deployment deployment = RouterResourceFactory.makeDesiredRouterBackendDeployment(router, null);

        assertEquals("injected", getEnvValue(deployment, "MY_ANNOTATION_VAR"));
    }

    // ── helpers ───────────────────────────────────────────────────────────────

    private static WanakuRouter createRouterWithExposure(
            WanakuTypes.ExposureType type,
            String ingressClassName,
            Map<String, String> annotations,
            WanakuTypes.TlsSpec tls) {
        WanakuTypes.ExposureSpec exposureSpec = new WanakuTypes.ExposureSpec();
        exposureSpec.setType(type);
        exposureSpec.setHost("wanaku.example.com");
        exposureSpec.setIngressClassName(ingressClassName);
        exposureSpec.setAnnotations(annotations);
        exposureSpec.setTls(tls);
        WanakuRouter router = createRouter(null);
        router.getSpec().setExposure(exposureSpec);
        return router;
    }

    private static WanakuRouter createRouter(WanakuRouterSpec.RouterSpec routerSpec) {
        return createRouter(routerSpec, null);
    }

    private static WanakuRouter createRouter(WanakuRouterSpec.RouterSpec routerSpec, Map<String, String> annotations) {
        WanakuRouter router = new WanakuRouter();
        router.setMetadata(new ObjectMetaBuilder()
                .withName("test-router")
                .withNamespace("default")
                .withUid("test-uid-1234")
                .withAnnotations(annotations)
                .build());
        WanakuRouterSpec spec = new WanakuRouterSpec();
        spec.setRouter(routerSpec);
        router.setSpec(spec);
        return router;
    }

    private static String getEnvValue(Deployment deployment, String name) {
        return deployment.getSpec().getTemplate().getSpec().getContainers().stream()
                .filter(c -> c.getName().equals("wanaku-mcp-router"))
                .findFirst()
                .flatMap(c -> c.getEnv().stream()
                        .filter(e -> e.getName().equals(name))
                        .findFirst())
                .map(EnvVar::getValue)
                .orElse(null);
    }
}
