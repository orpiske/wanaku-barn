# Contributing

## Tools, Providers, and Prompts

### Tools and Providers

A tool is anything that can operate in a request/reply mode.
A provider is anything that can read a resource.
Tools typically mean that some processing is performed on the provided input.
Providers typically facilitate access to a resource (such as file) without necessarily processing an input (except, of course,
evaluating the name of the resource and how that matches with the underlying system storing the resource).

Here are some examples:

- Producing a record to Kafka and waiting for a response in another topic is a tool
- Reading the last record on a Kafka topic is a provider
- Running an SQL query on a database is a tool (i.e., the query is the request, and returned rows are the response).
- Reading a data object in a S3 bucket is a provider
- Exchanging data using request/reply over JMS is a tool

> [!NOTE]
> This is a generic explanation and the distinction may be specific to the problem domain.
> Therefore, there may be cases where this doesn't apply.

### Prompts

A prompt is a reusable template that can leverage multiple tools and provide example interactions for LLMs.
Prompts are part of the MCP (Model Context Protocol) specification and enable:

- Creating standardized message templates with variable substitution
- Defining argument schemas for dynamic prompt generation
- Referencing tools that the prompt can utilize
- Supporting multiple content types (text, images, audio, embedded resources)
- Providing example interactions to guide LLM behavior

Prompts in Wanaku are stored and managed through the router's persistence layer and are exposed via the MCP protocol
endpoints (`prompts/list` and `prompts/get`).

Ideally, most of the MCP tools and MCP resource providers should be created using the
[Camel Integration Capability for Wanaku](https://wanaku.ai/docs/camel-integration-capability/).

> [!IMPORTANT]
> The vast majority of the custom capabilities should be included in the [Wanaku Examples](https://github.com/wanaku-ai/wanaku-examples)
> repository and not to the main Wanaku MCP Router project.

## Capabilities and Forwards

Wanaku supports acting as a router/gateway for two types of services:

- Downstream capability services. These services can either be plain Quarkus or Camel Extension for Quarkus.
- Other HTTP-based MCP servers (SSE). This allows integrating any MCP server with Wanaku.

The type of service you create will depend on the type of problem you want to solve. Downstream services offer
greater integration with Wanaku (i.e., including better discovery and configuration). On the other hand, plain MCP
services are simpler to create and develop.

### Capabilities Services Tips

### Adding Routes to Providers and Tools

In some cases, you may need something more complex than can be achieved using the `ProducerTemplate` from Camel.
In those cases, then you can create a traditional Camel route and invoke it from the delegate.

The example below shows a route that consumes from `direct:start` and sets a body as the reply:

```java
package ai.wanaku.tool;

import org.apache.camel.builder.RouteBuilder;

public class ExampleRoute extends RouteBuilder {
 @Override
    public void configure() throws Exception {
        from("direct:start")
                .log("Hello World ${body}")
                .setBody(constant("It worked!"));
    }
}
```

Then, on the delegate code, you should call that route using:

```java
String s = producer.requestBody("direct:start", parsedRequest.body(), String.class);
```

That should allow you to run more complex processing and transformation before calling the endpoint.

## Running Keycloak for Development

To run keycloak for development:

```shell
podman run -d \
  --name keycloak \
  -p 127.0.0.1:8543:8080 \
  -e KC_BOOTSTRAP_ADMIN_USERNAME="admin" \
  -e KC_BOOTSTRAP_ADMIN_PASSWORD="admin" \
  -v keycloak-data:/opt/keycloak/data \
  quay.io/keycloak/keycloak:26.7 \
  start-dev
```

If it is the first time you are using it, you will need to configure Wanaku's realm. You can use the CLI:

```shell
export WANAKU_ADMIN_USERNAME=admin
export WANAKU_ADMIN_PASSWORD=admin
wanaku admin realm create
```

Or alternatively, use the shell script:

```shell
export WANAKU_KEYCLOAK_PASS=admin
export WANAKU_KEYCLOAK_HOST=localhost:8543
cd deploy/auth
./configure-auth.sh
```

Then, take note of the newly generated client secret and use that for the capabilities services.

### Authentication Configuration

#### Using a Static Client

![Screenshot of OAuth configuration inspector showing client credentials and authentication settings](imgs/oauth-config-inspector.png)

#### Using Dynamic Client Registration

What the [![OAuth2 Dynamic Client Registration with Wanaku](https://img.youtube.com/vi/44j6025ewTA/0.jpg)](https://www.youtube.com/watch?v=44j6025ewTA)
video that shows how to use the MCP Inspector to perform these steps.

## Testing

> [!IMPORTANT]
> When running operator test plans on OpenShift, use a dedicated service account instead of your personal (admin) credentials.
> See [Service Account Setup](../tests/plans/setup/service-account-setup.md) for instructions.

There are multiple ways you can test Wanaku and the integrations you develop.

1. Wanaku's LLMchat page in the Web UI
2. You can use the [MCP inspector](https://modelcontextprotocol.io/docs/tools/inspector) to easily test your tool or provider.
3. Use the maintained test suites under `tests/e2e`, `tests/mcp-servers`, and `tests/load`.
4. Follow or create test plans under `tests/plans/` (see [Writing Test Plans](contributing-test-plans.md)).
5. Any agent application (such as [HyperChat](https://github.com/BigSweetPotatoStudio/HyperChat))

### Writing Test Plans

See [contributing-test-plans.md](contributing-test-plans.md) for the full guide on writing test plans.

## Deploying to the Development Environment

These are a couple of examples building the container and pushing to minikube or CRC (CodeReady Containers).
If you are deploying to a regular OpenShift cluster, it's pretty similar, you just have to change the image URL.

### Building for Minikube

Requirements:

- Minikube must be started.
- Enable the `registry` and `ingress` addon in minikube.
- Keycloak already installed and the `wanaku` configuration is created.
- docker
- Set the current namespace to wanaku: `kubectl config set-context --current --namespace=wanaku`.
- `kubectl` cli.

1. Connect to minikube internal registry.

```shell
eval $(minikube docker-env)
```

1. Build the container image from wanaku-barn-backend and wanaku-operator.

```shell
mvn -ntp -Dquarkus.container-image.build=true -Dquarkus.container-image.push=false -DskipTests package -pl :wanaku-operator,:wanaku-barn-backend
```

If everything went well, you should see the container is pushed to the registry:

```shell
[io.quarkus.container.image.jib.deployment.JibProcessor] Created container image quay.io/wanaku/wanaku-barn-backend (sha256:3d3ad35a4c6f3bc04c07388fb52f6b0caabae7d35c8d3cc217f40f589f6bbcd3)
```

Note that as the minikube registry docker is exposed, the image is already available in the registry once the container build finishes.
You can look with the cli: `docker images --format=table|grep wanaku`.

```shell
quay.io/wanaku/wanaku-operator            latest         fadfce7976a5   4 hours ago     463MB
quay.io/wanaku/wanaku-barn-backend      latest         8cc535c47cad   4 hours ago     535MB
```

1. Deploy to Minikube

```shell
./deploy/deploy-to-dev-env.sh
```

NOTE: You can customize some environment variables:

- `NAMESPACE`: The Kubernetes namespace to install services (default:  `wanaku`)
- `WANAKU_ADMIN_USERNAME`: Keycloak admin user (default:  `admin`)
- `WANAKU_ADMIN_PASSWORD`: Keycloak admin password (default:  `admin`)
- `WANAKU_INGRESS_HOST`: The ingress host (default `wanaku.$(minikube ip).nip.io}`)
- `WANAKU_OPERATOR_IMAGE`: Wanaku operator image (default:  `quay.io/wanaku/wanaku-operator:latest`)
- `WANAKU_ROUTER_IMAGE`: Wanaku router backend image (default:  `quay.io/wanaku/wanaku-barn-backend:latest`)

### Building for OpenShift

Requirements:

- OpenShift or CRC must be available.
- podman
- Keycloak already installed and the `wanaku` configuration is created.
- Set the current namespace to wanaku: `kubectl config set-context --current --namespace=wanaku`.
- `oc` cli.

1. The internal registry should be exposed, assign to REGISTRY environment variable. Check the OpenShift documentation on how to [expose the default registry manually](<https://docs.redhat.com/en/documentation/openshift_container_platform/4.18/html/registry/securing-exposing-registry#registry-exposing-default-registry-manually_securing-exposing-registry>

```shell
REGISTRY="$(kubectl get route/default-route -n openshift-image-registry -o=jsonpath='{.spec.host}')"
```

1. Log in with podman:

```shell
podman login -u $(oc whoami) -p $(oc whoami -t) --tls-verify=false $REGISTRY
```

1. Build all container images

```shell
mvn -ntp -Dquarkus.container-image.build=true -Dquarkus.container-image.push=true -DskipTests package -Dquarkus.container-image.registry=$REGISTRY -Dquarkus.container-image.insecure=true -Dopenshift -pl :wanaku-operator,:wanaku-barn-backend
```

The `-Dopenshift` activates the maven profile to set the quarkus-openshift dependencies.

If everything goes well, you should see the container being pushed to the registry:

```shell
[io.quarkus.container.image.jib.deployment.JibProcessor] Pushed container image default-route-openshift-image-registry.apps-crc.testing/wanaku/wanaku-barn-backend (sha256:a5d17a6d1bc1f7f0d2992872d37e5b00b444c9ab567a1ad97303acbb763ae132)
```

1. Deploy to OpenShift:

The default image URL is `quay.io/wanaku/wanaku-operator:latest` set in `apps/wanaku-operator/deploy/helm/wanaku-operator/values.yaml`, but we should override it with the environment variable `WANAKU_OPERATOR_IMAGE`, you should get the correct URL from the `is/wanaku-operator` resource.
The default username/password is `admin/admin`, you can override it with the environment variable `WANAKU_ADMIN_USERNAME` and `WANAKU_ADMIN_PASSWORD`.

```shell
export WANAKU_OPERATOR_IMAGE=$(oc get is/wanaku-operator  -ojsonpath='{.status.dockerImageRepository}')":latest"
export WANAKU_ROUTER_IMAGE=$(oc get is/wanaku-barn-backend  -ojsonpath='{.status.dockerImageRepository}')":latest"
./deploy/deploy-to-dev-env.sh
```

The script should print the Keycloak and Wanaku HTTPS URLs at the end:

```shell
[INFO]  Keycloak URL:  https://keycloak-wanaku.apps-crc.testing
[INFO]  Wanaku URL  :  https://wanaku-ci-dev-wanaku.apps-crc.testing
```

## Release Guide

Committers should check the [Release Guide](release-guide) for details about how to build and distribute Wanaku.

## Learn More

To contribute new core features and connectors, also read the [Wanaku MCP Router Internals](wanaku-router-internals.md) guide.

If you want to understand what each of the components do, then read the [Wanaku Components and Architecture](architecture.md) guide.
