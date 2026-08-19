package ai.wanaku.backend.core.persistence.infinispan;

import java.util.List;
import org.infinispan.commons.api.query.Query;
import org.infinispan.configuration.cache.Configuration;
import org.infinispan.manager.EmbeddedCacheManager;
import ai.wanaku.backend.core.persistence.api.NamespaceRepository;
import ai.wanaku.capabilities.sdk.api.types.Namespace;

public class InfinispanNamespaceRepository extends AbstractLabelAwareInfinispanRepository<Namespace, String>
        implements NamespaceRepository {

    protected InfinispanNamespaceRepository(EmbeddedCacheManager cacheManager, Configuration configuration) {
        super(cacheManager, configuration);
    }

    @Override
    protected Class<Namespace> entityType() {
        return Namespace.class;
    }

    @Override
    protected String entityName() {
        return "namespace";
    }

    @Override
    protected String newId() {
        return null;
    }

    @Override
    public List<Namespace> findByName(String name) {
        Query<Namespace> query = cacheManager
                .getCache(entityName())
                .query("from ai.wanaku.capabilities.sdk.api.types.Namespace t where t.name = :name");
        query.setParameter("name", name);
        return query.execute().list();
    }
}
