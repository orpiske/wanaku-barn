package ai.wanaku.cli.main.commands.mcp;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import static org.junit.jupiter.api.Assertions.assertEquals;

class McpEndpointTest {
    @ParameterizedTest
    @CsvSource({
        "http://localhost:4180, http://localhost:4180/default/mcp",
        "https://example.com, https://example.com/default/mcp",
        "http://[::1]:4180, http://[::1]:4180/default/mcp",
        "http://localhost:4180?x=a%2Fb, http://localhost:4180/default/mcp?x=a%2Fb",
        "http://localhost:4180/, http://localhost:4180/",
        "http://localhost:4180/team/mcp?x=a%2Fb, http://localhost:4180/team/mcp?x=a%2Fb",
        "http://localhost:4180/mcp, http://localhost:4180/mcp"
    })
    void resolvesOnlyOriginsWithoutPaths(String address, String expected) {
        assertEquals(expected, Mcp.endpoint(address));
    }
}
