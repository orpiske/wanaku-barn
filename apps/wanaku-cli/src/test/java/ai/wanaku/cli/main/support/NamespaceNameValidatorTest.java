package ai.wanaku.cli.main.support;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

class NamespaceNameValidatorTest {

    @Test
    void validNameReturnsNull() {
        assertNull(NamespaceNameValidator.validate("finance"));
        assertNull(NamespaceNameValidator.validate("my-team"));
        assertNull(NamespaceNameValidator.validate("ns-123"));
        assertNull(NamespaceNameValidator.validate("default"));
        assertNull(NamespaceNameValidator.validate("a"));
    }

    @Test
    void emptyNameReturnsError() {
        assertNotNull(NamespaceNameValidator.validate(""));
        assertNotNull(NamespaceNameValidator.validate(null));
    }

    @Test
    void uppercaseReturnsError() {
        assertNotNull(NamespaceNameValidator.validate("Finance"));
        assertNotNull(NamespaceNameValidator.validate("MY-TEAM"));
    }

    @Test
    void spacesReturnsError() {
        assertNotNull(NamespaceNameValidator.validate("my team"));
    }

    @Test
    void leadingHyphenReturnsError() {
        assertNotNull(NamespaceNameValidator.validate("-bad"));
    }

    @Test
    void trailingHyphenReturnsError() {
        assertNotNull(NamespaceNameValidator.validate("bad-"));
    }

    @Test
    void tooLongReturnsError() {
        String longName = "a".repeat(64);
        assertNotNull(NamespaceNameValidator.validate(longName));
    }

    @Test
    void maxLengthIsValid() {
        String maxName = "a".repeat(63);
        assertNull(NamespaceNameValidator.validate(maxName));
    }
}
