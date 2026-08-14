package ai.wanaku.cli.main.support;

import java.util.List;
import java.util.Map;
import io.smallrye.config.ConfigMapping;
import io.smallrye.config.WithDefault;
import ai.wanaku.core.config.WanakuConfig;

@ConfigMapping(prefix = "wanaku.cli")
public interface WanakuCliConfig extends WanakuConfig {

    interface Auth {
        @WithDefault("none")
        String mode();

        @WithDefault("~/.wanaku/credentials")
        String credentialsFile();

        @WithDefault("false")
        boolean enabled();
    }

    Auth auth();

    @WithDefault("early-access")
    String earlyAccessTag();

    List<String> defaultServices();

    /**
     * Returns a map of components that can be used in the getting started
     *
     * @return A map of component
     */
    Map<String, String> components();

    /**
     * Maximum number of seconds to wait for the local router readiness
     * endpoint before starting capability services.
     */
    @WithDefault("30")
    int routerStartWaitSecs();

    @WithDefault("local")
    String localProfile();
}
