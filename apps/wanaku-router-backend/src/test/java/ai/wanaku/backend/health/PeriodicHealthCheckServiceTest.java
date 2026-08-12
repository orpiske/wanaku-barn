package ai.wanaku.backend.health;

import java.util.List;
import java.util.concurrent.CompletableFuture;
import org.eclipse.microprofile.context.ManagedExecutor;
import io.smallrye.reactive.messaging.MutinyEmitter;
import ai.wanaku.backend.WanakuRouterConfig;
import ai.wanaku.backend.common.ServiceTargetEvent;
import ai.wanaku.backend.core.mcp.providers.ServiceRegistry;
import ai.wanaku.capabilities.sdk.api.types.discovery.ActivityRecord;
import ai.wanaku.capabilities.sdk.api.types.discovery.HealthStatus;
import ai.wanaku.capabilities.sdk.api.types.discovery.ServiceState;
import ai.wanaku.capabilities.sdk.api.types.providers.ServiceTarget;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

class PeriodicHealthCheckServiceTest {

    private static final String SERVICE_ID = "test-service-id";
    private static final String SERVICE_NAME = "test-service";

    private PeriodicHealthCheckService healthCheckService;
    private ServiceRegistry serviceRegistry;
    private ManagedExecutor managedExecutor;
    private MutinyEmitter<ServiceTargetEvent> eventEmitter;
    private WanakuRouterConfig config;
    private WanakuRouterConfig.HealthCheckConfig healthCheckConfig;

    @BeforeEach
    void setUp() {
        healthCheckService = new PeriodicHealthCheckService();
        serviceRegistry = mock(ServiceRegistry.class);
        managedExecutor = mock(ManagedExecutor.class);
        eventEmitter = mock(MutinyEmitter.class);
        config = mock(WanakuRouterConfig.class);
        healthCheckConfig = mock(WanakuRouterConfig.HealthCheckConfig.class);

        injectField(healthCheckService, "config", config);
        injectField(healthCheckService, "serviceRegistry", serviceRegistry);
        injectField(healthCheckService, "managedExecutor", managedExecutor);
        injectField(healthCheckService, "serviceTargetEventEmitter", eventEmitter);

        when(managedExecutor.submit(any(Runnable.class))).thenAnswer(invocation -> {
            Runnable runnable = invocation.getArgument(0);
            runnable.run();
            return CompletableFuture.completedFuture(null);
        });

        when(eventEmitter.hasRequests()).thenReturn(false);
        when(config.healthCheck()).thenReturn(healthCheckConfig);
        when(healthCheckConfig.enabled()).thenReturn(true);
        when(healthCheckConfig.maxConcurrent()).thenReturn(10);
    }

    @Test
    void checkInstanceHealth_skipsDeregisteredCapability() {
        ServiceTarget target =
                new ServiceTarget(SERVICE_ID, SERVICE_NAME, "localhost", 8080, "tool-invoker", "mcp", null, null, null);

        ActivityRecord inactiveRecord = createInactiveRecord();
        when(serviceRegistry.getStates(SERVICE_ID)).thenReturn(inactiveRecord);

        healthCheckService.checkInstanceHealth(target);

        verify(serviceRegistry, never()).updateHealthStatus(any(), any());
    }

    @Test
    void checkInstanceHealth_marksActiveCapabilityPending() {
        ServiceTarget target =
                new ServiceTarget(SERVICE_ID, SERVICE_NAME, "localhost", 8080, "tool-invoker", "mcp", null, null, null);

        ActivityRecord activeRecord = createActiveRecord();
        when(serviceRegistry.getStates(SERVICE_ID)).thenReturn(activeRecord);

        healthCheckService.checkInstanceHealth(target);

        verify(serviceRegistry).updateHealthStatus(SERVICE_ID, HealthStatus.PENDING);
    }

    @Test
    void checkInstanceHealth_skipsWhenNoActivityRecord() {
        ServiceTarget target =
                new ServiceTarget(SERVICE_ID, SERVICE_NAME, "localhost", 8080, "tool-invoker", "mcp", null, null, null);

        when(serviceRegistry.getStates(SERVICE_ID)).thenReturn(null);

        healthCheckService.checkInstanceHealth(target);

        verify(serviceRegistry, never()).updateHealthStatus(any(), any());
    }

    @Test
    void checkInstanceHealth_marksInvalidPortAsDown() {
        ServiceTarget target =
                new ServiceTarget(SERVICE_ID, SERVICE_NAME, "localhost", 0, "tool-invoker", "mcp", null, null, null);

        ActivityRecord activeRecord = createActiveRecord();
        when(serviceRegistry.getStates(SERVICE_ID)).thenReturn(activeRecord);

        healthCheckService.checkInstanceHealth(target);

        verify(serviceRegistry).updateHealthStatus(SERVICE_ID, HealthStatus.DOWN);
    }

    @Test
    void sweep_capsScheduledChecksAtConfiguredMaximum() {
        ServiceTarget first =
                new ServiceTarget("first", SERVICE_NAME, "localhost", 8080, "tool-invoker", "mcp", null, null, null);
        ServiceTarget second =
                new ServiceTarget("second", SERVICE_NAME, "localhost", 8081, "tool-invoker", "mcp", null, null, null);
        ServiceTarget third =
                new ServiceTarget("third", SERVICE_NAME, "localhost", 8082, "tool-invoker", "mcp", null, null, null);

        when(healthCheckConfig.maxConcurrent()).thenReturn(2);
        when(serviceRegistry.getEntries()).thenReturn(List.of(first, second, third));
        when(serviceRegistry.getStates(any())).thenReturn(createActiveRecord());

        healthCheckService.sweep();

        verify(managedExecutor, times(2)).submit(any(Runnable.class));
    }

    private ActivityRecord createActiveRecord() {
        ActivityRecord record = new ActivityRecord();
        record.setHealthStatus(HealthStatus.HEALTHY);
        record.setLastSeen(java.time.Instant.now());
        record.setStates(new java.util.ArrayList<>());
        return record;
    }

    private ActivityRecord createInactiveRecord() {
        ActivityRecord record = new ActivityRecord();
        record.setHealthStatus(HealthStatus.DOWN);
        record.setStates(new java.util.ArrayList<>());
        record.getStates().add(ServiceState.newInactive());
        return record;
    }

    private void injectField(Object target, String fieldName, Object value) {
        try {
            java.lang.reflect.Field field = target.getClass().getDeclaredField(fieldName);
            field.setAccessible(true);
            field.set(target, value);
        } catch (Exception e) {
            throw new RuntimeException("Failed to inject field " + fieldName, e);
        }
    }
}
