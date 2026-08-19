package ai.wanaku.cli.main.support;

import java.util.regex.Pattern;

/**
 * Validates namespace names follow DNS-label conventions.
 */
public final class NamespaceNameValidator {

    private static final int MAX_LENGTH = 63;
    private static final Pattern VALID_CHARS = Pattern.compile("^[a-z0-9-]+$");

    private NamespaceNameValidator() {}

    /**
     * Validates a namespace name.
     *
     * @param name the name to validate
     * @return null if valid, or an error message describing the violation
     */
    public static String validate(String name) {
        if (name == null || name.isEmpty()) {
            return "namespace name must not be empty";
        }

        if (name.length() > MAX_LENGTH) {
            return String.format("namespace name must be at most %d characters, got %d", MAX_LENGTH, name.length());
        }

        if (!VALID_CHARS.matcher(name).matches()) {
            return "namespace name must contain only lowercase alphanumeric characters and hyphens";
        }

        if (name.charAt(0) == '-' || name.charAt(name.length() - 1) == '-') {
            return "namespace name must not start or end with a hyphen";
        }

        return null;
    }
}
