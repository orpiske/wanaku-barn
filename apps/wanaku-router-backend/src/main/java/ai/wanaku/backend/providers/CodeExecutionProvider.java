package ai.wanaku.backend.providers;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.inject.Produces;

import java.util.Collections;
import org.jboss.logging.Logger;
import io.quarkus.arc.DefaultBean;
import ai.wanaku.backend.bridge.CodeExecutorBridge;
import ai.wanaku.capabilities.sdk.api.types.execution.CodeExecutionEvent;

/**
 * A provider for code execution bridges.
 */
@ApplicationScoped
public class CodeExecutionProvider {
    private static final Logger LOG = Logger.getLogger(CodeExecutionProvider.class);

    @Produces
    @DefaultBean
    @ApplicationScoped
    CodeExecutorBridge getCodeExecutorBridge() {
        LOG.debug("Creating stub CodeExecutorBridge");
        return (engineType, language, request, requestId) -> Collections.<CodeExecutionEvent>emptyIterator();
    }
}
