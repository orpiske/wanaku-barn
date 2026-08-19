package ai.wanaku.cli.main.commands.namespaces;

import ai.wanaku.capabilities.sdk.api.types.Namespace;
import ai.wanaku.capabilities.sdk.api.types.WanakuResponse;
import ai.wanaku.cli.main.support.WanakuPrinter;
import ai.wanaku.core.services.api.NamespacesService;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class NamespacesShowTest {

    @Mock
    private NamespacesService namespacesService;

    private NamespacesShow command;

    @BeforeEach
    void setUp() {
        command = new NamespacesShow();
        command.namespacesService = namespacesService;
        command.host = "http://localhost:8080";
    }

    @Test
    @DisplayName("Should show namespace when found")
    void shouldShowNamespaceWhenFound() throws Exception {
        Namespace namespace = new Namespace();
        namespace.setName("finance");

        when(namespacesService.getByName("finance")).thenReturn(new WanakuResponse<>(namespace));

        command.name = "finance";
        Integer result = command.doCall(null, mock(WanakuPrinter.class));

        assertEquals(0, result);
    }

    @Test
    @DisplayName("Should return error when namespace not found")
    void shouldReturnErrorWhenNamespaceNotFound() throws Exception {
        when(namespacesService.getByName("missing")).thenReturn(new WanakuResponse<>(null));

        command.name = "missing";
        Integer result = command.doCall(null, mock(WanakuPrinter.class));

        assertEquals(1, result);
    }
}
