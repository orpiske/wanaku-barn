package ai.wanaku.backend.core.persistence.infinispan;

import jakarta.inject.Inject;

import java.util.List;
import org.jboss.logging.Logger;
import io.quarkus.test.junit.QuarkusTest;
import io.quarkus.test.junit.TestProfile;
import ai.wanaku.backend.core.persistence.api.NamespaceRepository;
import ai.wanaku.backend.support.NoOidcTestProfile;
import ai.wanaku.capabilities.sdk.api.types.Namespace;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestMethodOrder;

@QuarkusTest
@TestProfile(NoOidcTestProfile.class)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class NamespaceRepositoryTest {
    private static final Logger LOG = Logger.getLogger(NamespaceRepositoryTest.class);

    @Inject
    NamespaceRepository namespaceRepository;

    private final int maxNamespaces = 10;

    @BeforeAll
    void setup() {
        ((AbstractInfinispanRepository<?, ?>) namespaceRepository).deleteALl();
    }

    @DisplayName("Tests that inserting namespaces creates correct records")
    @Order(1)
    @Test
    void testInsert() {
        for (int i = 0; i < maxNamespaces; i++) {
            final String namespaceName = String.format("ns-%d", i);
            Namespace namespace = new Namespace();
            namespace.setName(namespaceName);

            final Namespace persisted = namespaceRepository.persist(namespace);
            Assertions.assertNotNull(persisted);
            Assertions.assertEquals(namespaceName, persisted.getName());

            LOG.infof("Created namespace %s", namespaceName);
        }

        Assertions.assertEquals(maxNamespaces, namespaceRepository.size());
    }

    @DisplayName("Tests that namespaces can be found by name")
    @Order(2)
    @Test
    void testFindByName() {
        final String namespaceName = "ns-0";
        final List<Namespace> namespaces = namespaceRepository.findByName(namespaceName);

        Assertions.assertEquals(1, namespaces.size());
        Namespace namespace = namespaces.getFirst();
        Assertions.assertNotNull(namespace);
        Assertions.assertEquals(namespaceName, namespace.getName());
    }

    @DisplayName("Tests that findByName returns empty for non-existent namespace")
    @Order(3)
    @Test
    void testFindByNameNotFound() {
        final List<Namespace> namespaces = namespaceRepository.findByName("non-existent");
        Assertions.assertTrue(namespaces.isEmpty());
    }

    @DisplayName("Tests that does not exceed the maximum number of records")
    @Order(4)
    @Test
    void testDoesNotExceedMaxNamespaces() {
        Assertions.assertEquals(maxNamespaces, namespaceRepository.size());
    }
}
