package ai.wanaku.cli.main.commands.namespaces;

import jakarta.ws.rs.WebApplicationException;
import jakarta.ws.rs.core.Response;

import org.jline.terminal.Terminal;
import ai.wanaku.capabilities.sdk.api.types.Namespace;
import ai.wanaku.capabilities.sdk.api.types.WanakuResponse;
import ai.wanaku.cli.main.commands.BaseCommand;
import ai.wanaku.cli.main.support.WanakuPrinter;
import ai.wanaku.core.services.api.NamespacesService;
import picocli.CommandLine;

import static ai.wanaku.cli.main.support.ResponseHelper.commonResponseErrorHandler;

@CommandLine.Command(name = "show", description = "Show detailed information about a namespace")
public class NamespacesShow extends BaseCommand {

    @CommandLine.Option(
            names = {"--host"},
            description = "The API host",
            defaultValue = "http://localhost:8080",
            arity = "0..1")
    protected String host;

    @CommandLine.Parameters(description = "The name of the namespace to show", arity = "1")
    String name;

    NamespacesService namespacesService;

    @Override
    public Integer doCall(Terminal terminal, WanakuPrinter printer) throws Exception {
        namespacesService = initAuthenticatedServiceIfNeeded(namespacesService, NamespacesService.class, host);

        try {
            WanakuResponse<Namespace> response = namespacesService.getByName(name);
            Namespace namespace = response.data();

            if (namespace == null) {
                printer.printWarningMessage("Namespace not found: " + name);
                return EXIT_ERROR;
            }

            printer.printInfoMessage("Namespace Details:");
            printer.printAsMap(namespace, "name", "labels");
            return EXIT_OK;
        } catch (WebApplicationException ex) {
            Response response = ex.getResponse();
            commonResponseErrorHandler(response);
            return EXIT_ERROR;
        }
    }
}
