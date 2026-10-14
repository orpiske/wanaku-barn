package ai.wanaku.operator.wanaku;

import io.fabric8.kubernetes.api.model.ObjectMetaBuilder;
import io.fabric8.kubernetes.client.KubernetesClient;
import io.fabric8.kubernetes.client.dsl.MixedOperation;
import io.fabric8.kubernetes.client.dsl.NonNamespaceOperation;
import io.fabric8.kubernetes.client.dsl.Resource;
import io.fabric8.openshift.api.model.Route;
import io.fabric8.openshift.api.model.RouteList;
import io.fabric8.openshift.client.OpenShiftClient;
import ai.wanaku.operator.util.RouterResourceFactory;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class WanakuRouterRouteReconcilerTest {
    @Mock
    KubernetesClient kubernetesClient;

    @InjectMocks
    WanakuRouterReconciler reconciler;

    @Test
    void openshiftCreatesRoutesWithoutExposureUsingAssignedHost() {
        WanakuRouter resource = createRouter();
        var operations = mockOpenShiftRoutes();
        Route management = RouterResourceFactory.makeServerRoute(resource, "wanaku.apps.example.com", false);
        Resource<Route> write = mock(Resource.class);
        Resource<Route> read = mock(Resource.class);
        when(operations.withName(anyString())).thenReturn(read);
        when(operations.resource(any(Route.class))).thenReturn(write);
        when(write.createOr(any())).thenReturn(management);

        assertEquals("wanaku.apps.example.com", reconciler.reconcileExternalAccess(resource, "default"));

        ArgumentCaptor<Route> routes = ArgumentCaptor.forClass(Route.class);
        verify(operations, times(2)).resource(routes.capture());
        assertNull(routes.getAllValues().getFirst().getSpec().getHost());
        Route mcp = routes.getAllValues().getLast();
        assertEquals("wanaku.apps.example.com", mcp.getSpec().getHost());
        assertEquals("/mcp", mcp.getSpec().getPath());
    }

    @Test
    void openshiftKeepsExistingAssignedHostWithoutUpdatingRoutes() {
        WanakuRouter resource = createRouter();
        var operations = mockOpenShiftRoutes();
        Resource<Route> management = mock(Resource.class);
        Resource<Route> mcp = mock(Resource.class);
        when(operations.withName("test-router")).thenReturn(management);
        when(operations.withName("test-router-mcp")).thenReturn(mcp);
        when(management.get())
                .thenReturn(RouterResourceFactory.makeServerRoute(resource, "wanaku.apps.example.com", false));
        when(mcp.get()).thenReturn(RouterResourceFactory.makeServerRoute(resource, "wanaku.apps.example.com", true));

        assertEquals("wanaku.apps.example.com", reconciler.reconcileExternalAccess(resource, "default"));
        verify(operations, never()).resource(any(Route.class));
    }

    @Test
    void openshiftExposureWithoutHostPassesValidation() {
        when(kubernetesClient.supports(Route.class)).thenReturn(true);
        WanakuRouter resource = createRouter();
        resource.getSpec().setExposure(new WanakuTypes.ExposureSpec());
        assertTrue(reconciler.validateSpec(resource).valid);
    }

    @Test
    void kubernetesWithoutExposureKeepsInternalServiceName() {
        assertEquals("server-test-router", reconciler.reconcileExternalAccess(createRouter(), "default"));
        verify(kubernetesClient, never()).adapt(OpenShiftClient.class);
    }

    private NonNamespaceOperation<Route, RouteList, Resource<Route>> mockOpenShiftRoutes() {
        OpenShiftClient client = mock(OpenShiftClient.class);
        MixedOperation<Route, RouteList, Resource<Route>> routes = mock(MixedOperation.class);
        NonNamespaceOperation<Route, RouteList, Resource<Route>> operations = mock(NonNamespaceOperation.class);
        when(kubernetesClient.supports(Route.class)).thenReturn(true);
        when(kubernetesClient.adapt(OpenShiftClient.class)).thenReturn(client);
        when(client.routes()).thenReturn(routes);
        when(routes.inNamespace("default")).thenReturn(operations);
        return operations;
    }

    private static WanakuRouter createRouter() {
        WanakuRouter resource = new WanakuRouter();
        resource.setMetadata(new ObjectMetaBuilder()
                .withName("test-router")
                .withNamespace("default")
                .withUid("test-uid")
                .build());
        resource.setSpec(new WanakuRouterSpec());
        return resource;
    }
}
