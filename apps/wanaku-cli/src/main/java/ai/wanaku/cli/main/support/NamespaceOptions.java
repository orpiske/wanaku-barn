package ai.wanaku.cli.main.support;

import picocli.CommandLine.Option;

/**
 * Shared Picocli argument group for namespace identification.
 * <p>
 * Provides {@code --namespace} ({@code -N}) to identify a namespace by name.
 * The name serves as the unique identifier, URL path segment, and display name.
 * </p>
 */
public class NamespaceOptions {

    @Option(
            names = {"-N", "--namespace", "--namespace-name"},
            description = "The namespace name",
            required = true)
    String namespace;

    /**
     * Returns the namespace name.
     *
     * @return the namespace name
     */
    public String getNamespace() {
        return namespace;
    }

    /**
     * Returns the namespace name to pass to the server.
     *
     * @return the namespace name
     */
    public String getNamespaceValue() {
        return namespace;
    }
}
