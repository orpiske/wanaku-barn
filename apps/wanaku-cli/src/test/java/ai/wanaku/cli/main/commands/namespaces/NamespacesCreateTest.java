package ai.wanaku.cli.main.commands.namespaces;

import java.util.Map;
import ai.wanaku.capabilities.sdk.api.types.Namespace;
import ai.wanaku.capabilities.sdk.api.types.WanakuResponse;
import ai.wanaku.cli.main.support.WanakuPrinter;
import ai.wanaku.core.services.api.NamespacesService;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class NamespacesCreateTest {

    @Mock
    private NamespacesService namespacesService;

    private NamespacesCreate command;

    @BeforeEach
    void setUp() {
        command = new NamespacesCreate();
        command.namespacesService = namespacesService;
        command.host = "http://localhost:8080";
    }

    @Test
    @DisplayName("Should create namespace with name and labels")
    void shouldCreateNamespaceWithNameAndLabels() throws Exception {
        Namespace created = new Namespace();
        created.setName("team");

        when(namespacesService.create(any(Namespace.class))).thenReturn(new WanakuResponse<>(created));

        command.name = "team";
        command.labels = Map.of("env", "dev");

        Integer result = command.doCall(null, mock(WanakuPrinter.class));

        assertEquals(0, result);
        ArgumentCaptor<Namespace> captor = ArgumentCaptor.forClass(Namespace.class);
        verify(namespacesService).create(captor.capture());
        Namespace submitted = captor.getValue();
        assertEquals("team", submitted.getName());
        assertEquals("dev", submitted.getLabels().get("env"));
    }

    @Test
    @DisplayName("Should reject invalid namespace name")
    void shouldRejectInvalidNamespaceName() throws Exception {
        command.name = "Bad Name";

        WanakuPrinter printer = mock(WanakuPrinter.class);
        Integer result = command.doCall(null, printer);

        assertEquals(1, result);
    }

    @Test
    @DisplayName("Should reject namespace name starting with hyphen")
    void shouldRejectNamespaceNameStartingWithHyphen() throws Exception {
        command.name = "-bad";

        WanakuPrinter printer = mock(WanakuPrinter.class);
        Integer result = command.doCall(null, printer);

        assertEquals(1, result);
    }
}
