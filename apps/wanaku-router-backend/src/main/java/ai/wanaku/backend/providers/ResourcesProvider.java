package ai.wanaku.backend.providers;

import jakarta.annotation.PostConstruct;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.inject.Instance;
import jakarta.enterprise.inject.Produces;
import jakarta.inject.Inject;

import java.util.List;
import io.smallrye.mutiny.Uni;
import ai.wanaku.backend.bridge.ResourceBridge;
import ai.wanaku.backend.bridge.types.WanakuResourceReadContext;
import ai.wanaku.backend.bridge.types.WanakuResourceResult;
import ai.wanaku.backend.core.mcp.providers.ServiceRegistry;
import ai.wanaku.backend.service.support.FirstAvailable;
import ai.wanaku.backend.service.support.ServiceResolver;
import ai.wanaku.capabilities.sdk.api.types.ResourceReference;

/**
 * A provider for resources resolvers
 */
@ApplicationScoped
public class ResourcesProvider {
    @Inject
    Instance<ServiceRegistry> serviceRegistryInstance;

    private ServiceRegistry serviceRegistry;

    @PostConstruct
    public void init() {
        serviceRegistry = serviceRegistryInstance.get();
    }

    @Produces
    ServiceResolver getServiceResolver() {
        return new FirstAvailable(serviceRegistry);
    }

    @Produces
    ResourceBridge getResourceBridge() {
        return new ResourceBridge() {
            @Override
            public Uni<WanakuResourceResult> read(
                    WanakuResourceReadContext readContext, ResourceReference mcpResource) {
                return Uni.createFrom().item(new WanakuResourceResult(List.of()));
            }
        };
    }
}
