package ai.wanaku.backend.support;

import org.infinispan.Cache;
import org.infinispan.manager.EmbeddedCacheManager;
import org.jboss.logging.Logger;
import io.quarkus.arc.Arc;
import io.quarkus.arc.ArcContainer;
import io.quarkus.arc.InstanceHandle;

public class TestIndexHelper {
    private static final Logger LOG = Logger.getLogger(TestIndexHelper.class);

    /**
     * Clears all Infinispan caches via CDI.
     * If CDI is not yet available (e.g., before Quarkus starts), this is
     * a no-op since purgeOnStartup will handle the cleanup.
     */
    public static void clearAllCaches() {
        try {
            ArcContainer container = Arc.container();
            if (container == null) {
                return;
            }
            InstanceHandle<EmbeddedCacheManager> handle = container.instance(EmbeddedCacheManager.class);
            if (handle.isAvailable()) {
                EmbeddedCacheManager cacheManager = handle.get();
                for (String name : cacheManager.getCacheNames()) {
                    Cache<?, ?> cache = cacheManager.getCache(name);
                    if (cache != null) {
                        cache.clear();
                    }
                }
            }
        } catch (Exception e) {
            LOG.warnf("Could not clear caches: %s", e.getMessage());
        }
    }
}
