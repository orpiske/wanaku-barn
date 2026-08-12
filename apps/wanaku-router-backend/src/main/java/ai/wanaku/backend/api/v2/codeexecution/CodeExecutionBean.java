/*
 * Copyright 2026 Wanaku AI
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package ai.wanaku.backend.api.v2.codeexecution;

import jakarta.annotation.PostConstruct;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.inject.Instance;
import jakarta.inject.Inject;

import java.util.Iterator;
import org.eclipse.microprofile.context.ManagedExecutor;
import org.eclipse.microprofile.reactive.messaging.Channel;
import org.eclipse.microprofile.reactive.messaging.OnOverflow;
import org.jboss.logging.Logger;
import io.smallrye.reactive.messaging.MutinyEmitter;
import ai.wanaku.backend.bridge.CodeExecutorBridge;
import ai.wanaku.backend.core.persistence.infinispan.codeexecution.InfinispanCodeTaskRepository;
import ai.wanaku.capabilities.sdk.api.types.execution.CodeExecutionEvent;
import ai.wanaku.capabilities.sdk.api.types.execution.CodeExecutionRequest;
import ai.wanaku.capabilities.sdk.api.types.execution.CodeExecutionResponse;
import ai.wanaku.capabilities.sdk.api.types.execution.CodeExecutionTask;

/**
 * Business logic for code execution operations.
 */
@ApplicationScoped
public class CodeExecutionBean {
    private static final Logger LOG = Logger.getLogger(CodeExecutionBean.class);

    @Inject
    Instance<InfinispanCodeTaskRepository> infinispanCodeTaskRepositoryInstance;

    @Inject
    Instance<CodeExecutorBridge> codeExecutorBridgeInstance;

    @Inject
    ManagedExecutor managedExecutor;

    @Inject
    @Channel("code-execution-event")
    @OnOverflow(OnOverflow.Strategy.DROP)
    MutinyEmitter<CodeExecutionEvent> codeEventEmitter;

    private InfinispanCodeTaskRepository taskRepository;

    private CodeExecutorBridge codeExecutionBridge;

    @PostConstruct
    public void init() {
        taskRepository = infinispanCodeTaskRepositoryInstance.get();
        codeExecutionBridge = codeExecutorBridgeInstance.get();
    }

    /**
     * Submits code for execution and creates a new task.
     *
     * @param engineType the execution engine type (e.g., "jvm", "interpreted")
     * @param language the programming language (e.g., "java", "python")
     * @param request the code execution request
     * @param baseUrl the base URL for constructing the SSE stream URL
     * @return a response containing task details and SSE URL
     */
    public CodeExecutionResponse submitExecution(
            String engineType, String language, CodeExecutionRequest request, String baseUrl) {

        LOG.infof("Creating code execution task (engine=%s, language=%s)", engineType, language);

        CodeExecutionTask task = new CodeExecutionTask(null, request, language, engineType);
        CodeExecutionTask storedTask = taskRepository.store(task);
        String taskId = storedTask.getTaskId();

        String sseUrl =
                String.format("%s/api/v2/code-execution-engine/%s/%s/%s", baseUrl, engineType, language, taskId);

        final Iterator<CodeExecutionEvent> eventIterator =
                codeExecutionBridge.executeCode(engineType, language, request, "");

        managedExecutor.runAsync(() -> consumeEvents(eventIterator, taskId));

        LOG.debugf("Task %s created with SSE URL: %s", taskId, sseUrl);

        return CodeExecutionResponse.createPending(taskId, sseUrl);
    }

    public void consumeEvents(Iterator<CodeExecutionEvent> events, String taskId) {
        try {
            while (events.hasNext()) {
                CodeExecutionEvent event = events.next();
                event.setTaskId(taskId);
                emitEvent(event);
            }
        } finally {
            LOG.infof("Task %s finished", taskId);
            taskRepository.remove(taskId);
        }
    }

    private void emitEvent(CodeExecutionEvent event) {
        boolean hasRequests = codeEventEmitter.hasRequests();
        if (hasRequests) {
            LOG.infof("Emitting event for task %s: %s", event.getTaskId(), event.getOutput());
            codeEventEmitter.sendAndForget(event);
        } else {
            LOG.trace("No pending consumers to send the request");
        }
    }
}
