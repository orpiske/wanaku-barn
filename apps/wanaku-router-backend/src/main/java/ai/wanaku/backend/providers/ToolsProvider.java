package ai.wanaku.backend.providers;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.inject.Produces;

import org.jboss.logging.Logger;
import io.smallrye.mutiny.Uni;
import ai.wanaku.backend.bridge.ToolsBridge;
import ai.wanaku.core.util.VersionHelper;

/**
 * A provider for tools bridge
 */
@ApplicationScoped
public class ToolsProvider {
    private static final Logger LOG = Logger.getLogger(ToolsProvider.class);

    @Produces
    ToolsBridge getToolsBridge() {
        LOG.infof("Wanaku version %s is starting", VersionHelper.VERSION);
        return (toolArguments, toolReference) -> Uni.createFrom().nullItem();
    }
}
