package ai.wanaku.backend.core.persistence.api;

import java.util.List;
import ai.wanaku.capabilities.sdk.api.types.Namespace;

/**
 * Repository interface for managing {@link Namespace} entities.
 * <p>
 * This interface extends {@link LabelAwareInfinispanRepository} to provide persistence operations
 * for namespaces, which provide logical grouping and isolation for capabilities,
 * tools, and resources within the Wanaku system.
 */
public interface NamespaceRepository extends LabelAwareInfinispanRepository<Namespace, String> {

    /**
     * Finds all namespaces with the specified name.
     *
     * @param name the name of the namespaces to find
     * @return a list of matching namespaces, or an empty list if none found
     */
    List<Namespace> findByName(String name);
}
