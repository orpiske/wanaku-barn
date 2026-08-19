package ai.wanaku.cli.main.commands.namespaces;

import jakarta.ws.rs.WebApplicationException;
import jakarta.ws.rs.core.Response;

import java.util.Map;
import org.jline.terminal.Terminal;
import ai.wanaku.capabilities.sdk.api.types.Namespace;
import ai.wanaku.capabilities.sdk.api.types.WanakuResponse;
import ai.wanaku.cli.main.commands.BaseCommand;
import ai.wanaku.cli.main.support.NamespaceNameValidator;
import ai.wanaku.cli.main.support.WanakuPrinter;
import ai.wanaku.core.services.api.NamespacesService;
import picocli.CommandLine;

import static ai.wanaku.cli.main.support.ResponseHelper.commonResponseErrorHandler;

@CommandLine.Command(name = "create", description = "Create a namespace")
public class NamespacesCreate extends BaseCommand {

    @CommandLine.Option(
            names = {"--host"},
            description = "The API host",
            defaultValue = "http://localhost:8080",
            arity = "0..1")
    protected String host;

    @CommandLine.Parameters(
            description = "The namespace name (DNS-label: lowercase alphanumeric and hyphens, 1-63 chars)",
            arity = "1")
    String name;

    @CommandLine.Option(
            names = {"-l", "--label"},
            description = "Label key-value pair (e.g., '--label env=production --label tier=backend')",
            arity = "0..*")
    Map<String, String> labels;

    NamespacesService namespacesService;

    @Override
    public Integer doCall(Terminal terminal, WanakuPrinter printer) throws Exception {
        namespacesService = initAuthenticatedServiceIfNeeded(namespacesService, NamespacesService.class, host);

        String validationError = NamespaceNameValidator.validate(name);
        if (validationError != null) {
            printer.printErrorMessage(validationError);
            return EXIT_ERROR;
        }

        Namespace namespace = new Namespace();
        namespace.setName(name);

        if (labels != null && !labels.isEmpty()) {
            namespace.setLabels(labels);
        }

        try {
            WanakuResponse<Namespace> response = namespacesService.create(namespace);
            Namespace created = response.data();

            if (created == null) {
                printer.printErrorMessage("Namespace creation failed: empty response");
                return EXIT_ERROR;
            }

            printer.printSuccessMessage("Namespace created: " + created.getName());
            printer.printAsMap(created, "name", "labels");
            return EXIT_OK;
        } catch (WebApplicationException ex) {
            Response response = ex.getResponse();
            commonResponseErrorHandler(response);
            return EXIT_ERROR;
        }
    }
}
