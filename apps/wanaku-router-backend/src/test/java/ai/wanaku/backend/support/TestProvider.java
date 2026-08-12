package ai.wanaku.backend.support;

import jakarta.annotation.Priority;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.inject.Produces;

import org.jboss.logging.Logger;
import io.quarkus.arc.DefaultBean;
import io.smallrye.mutiny.Uni;
import ai.wanaku.backend.bridge.ToolsBridge;

@ApplicationScoped
public class TestProvider {
    private static final Logger LOG = Logger.getLogger(TestProvider.class);

    @Produces
    @DefaultBean
    @Priority(100)
    ToolsBridge toolsBridge() {
        LOG.infof("Creating test tools bridge");
        return (toolArguments, toolReference) -> Uni.createFrom().nullItem();
    }
}
