package ai.wanaku.cli.main.commands.mcp;

import java.net.URI;
import org.jline.terminal.Terminal;
import ai.wanaku.cli.main.commands.BaseCommand;
import ai.wanaku.cli.main.support.WanakuPrinter;
import picocli.CommandLine;

@CommandLine.Command(
        name = "mcp",
        description = "Interact with MCP servers directly",
        subcommands = {McpTool.class, McpResource.class, McpPrompt.class})
public class Mcp extends BaseCommand {

    static final String PROTOCOL_VERSION = "2025-11-25";

    /** Use the default Wanaku namespace for an origin without an explicit endpoint path. */
    static String endpoint(String address) {
        URI uri = URI.create(address);
        if (uri.getRawAuthority() != null && "".equals(uri.getRawPath())) {
            int originLength =
                    uri.getScheme().length() + 3 + uri.getRawAuthority().length();
            return address.substring(0, originLength) + "/default/mcp" + address.substring(originLength);
        }
        return address;
    }

    @Override
    public Integer doCall(Terminal terminal, WanakuPrinter printer) {
        CommandLine.usage(this, System.out);
        return EXIT_OK;
    }
}
