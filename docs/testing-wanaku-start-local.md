# Testing Wanaku Start Local

Build for distribution:

```shell
mvn -DskipTests -Pdist clean package
```

Run the CLI with local distributions:

```shell
./tests/wanaku-start-local-test.sh
```

Then, access <http://localhost:8080/admin>. Wanaku should be available at that address. No authentication should be required.

## Testing with the [Camel Integration Capability](https://github.com/wanaku-ai/camel-integration-capability)

Build the [Camel Integration Capability](https://github.com/wanaku-ai/camel-integration-capability) JAR, then
use `--local-dist` to supply it alongside the wanaku distributions.

**With route files:**

```shell
version=$(cat core/core-util/target/classes/version.txt)
java -jar apps/wanaku-cli/target/quarkus-app/quarkus-run.jar start local \
  --local-dist apps/wanaku-barn-backend/target/distributions/wanaku-barn-backend-${version}.zip \
  --local-dist /path/to/camel-integration-capability-main-0.3.0-SNAPSHOT-jar-with-dependencies.jar \
  --camel-routes file:///path/to/routes.camel.yaml \
  --camel-rules file:///path/to/rules.yaml
```

**With a service catalog:**

```shell
version=$(cat core/core-util/target/classes/version.txt)
java -jar apps/wanaku-cli/target/quarkus-app/quarkus-run.jar start local \
  --local-dist apps/wanaku-barn-backend/target/distributions/wanaku-barn-backend-${version}.zip \
  --local-dist /path/to/camel-integration-capability-main-0.3.0-SNAPSHOT-jar-with-dependencies.jar \
  --service-catalog my-catalog \
  --service-catalog-system ftp
```

The `camel-integration` MCP server is automatically added when any CIC option is provided.

## Stopping the router

The router must be stopped gently. Do not kill the process with signal -9 because it leaves dangling processes.

Use the stop script to gracefully shut down the router and all MCP servers:

```shell
./tests/wanaku-start-local-stop.sh
```

If you captured the PID at startup, you can pass it directly:

```shell
WANAKU_PID=<pid> ./tests/wanaku-start-local-stop.sh
```

The script sends SIGTERM first and waits for processes to exit. SIGKILL is only used as a last resort if processes do not respond.
