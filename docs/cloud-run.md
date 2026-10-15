# Running Integrations in the Cloud

The `wanaku cloud` commands run your Camel routes in a Kubernetes or OpenShift cluster, next to a Wanaku router that the Wanaku operator manages.
You write a route file on your machine; one command packages it, starts it in the cluster, and makes its tools available through the router.

The commands work with any cluster that you can reach with `kubectl`. They do not depend on a cloud provider.

## Prerequisites

- The Wanaku operator is installed in the cluster, at a version that serves the `WanakuIntegration` resource. See the [Kubernetes Operator Guide](operator.md).
- A `WanakuRouter` is ready in the namespace that you use.
- Your kubeconfig can reach the cluster. Your account can create ConfigMaps and `WanakuIntegration` resources in the namespace.

## Setting the Target

The cloud target is the Kubernetes context, the namespace and the `WanakuRouter` that your runtimes register with.
The CLI stores it in `$WANAKU_HOME/cloud.properties` (by default `~/.wanaku/cloud.properties`).

To store the target, use this command:

```shell
wanaku cloud target set --context my-cluster --namespace wanaku --router wanaku-dev
```

To show the stored target, use this command:

```shell
wanaku cloud target show
```

Each cloud command also accepts `--context`, `--namespace` and `--router`. These options override the stored target for one command.
If you do not set a context or a namespace, the CLI uses the current kubeconfig context and its namespace.

## Running an Integration

The input is a Camel YAML route file. The Camel Integration Capability serves each route that starts from `ai-tool:<name>` and has a matching tag as an MCP tool:

```yaml
- route:
    id: echo-tool
    from:
      uri: ai-tool:echo
      parameters:
        tags: wanaku
        description: Echo the message
        parameter.message: string
      steps:
        - setBody:
            simple: "${header.message}"
```

To run the file, use this command:

```shell
wanaku cloud run integration echo.camel.yaml
```

The command does these steps:

1. It checks the file. The file must be a Camel YAML DSL list, smaller than 900 KiB, with at least one MCP tool route. The tool route must have one of the tags in `--tags` (default `wanaku`).
2. It checks that the target `WanakuRouter` exists and is ready.
3. It writes the file into the `<name>-routes` ConfigMap, and creates or updates the `<name>` `WanakuIntegration` resource. The name comes from the file name (`echo.camel.yaml` gives `echo`). Use `--name` to set another name.
4. It waits until the operator reports `Ready=True`, and prints each change of the `Ready` condition.

When the integration is ready, the command prints the forward name and the router MCP endpoint that serves the tools.

| Option | Description |
|--------|-------------|
| `--name` | Resource name (default: derived from the file name) |
| `--forward-name` | Forward name in the router (default: the resource name) |
| `--forward-namespace` | Wanaku namespace of the forward (default `default`) |
| `--dependencies` | Extra Maven dependencies, comma separated (`group:artifact:version`) |
| `--tags` | Route tags to serve as MCP tools (default `wanaku`) |
| `--image` | Capability image (default: chosen by the operator) |
| `--no-wait` | Return after the submission, without waiting |
| `--timeout` | Seconds to wait for the integration (default 300) |

When you run the command again with the same name, it updates the route files and restarts the integration.

## Exit Codes

| Code | Meaning |
|------|---------|
| 0 | The integration is ready, or it was submitted with `--no-wait`. |
| 1 | The integration failed to start (for example, `CrashLoopBackOff` or a validation error), or it was not ready before the timeout. |
| 2 | The input is not valid: the file is missing, is not Camel YAML, or has no MCP tool route. Nothing was submitted. |
| 3 | The target is not reachable: the CLI cannot reach the cluster, the router is missing or not ready, or the operator does not serve `WanakuIntegration`. |
| 4 | The integration started, but its registration with the router did not complete. |

## Checking and Removing an Integration

To show the conditions and the endpoints of an integration, use this command:

```shell
wanaku cloud status integration echo
```

To read the logs of an integration, use this command:

```shell
kubectl logs deployment/echo-cic
```

An integration runs until you delete it. To delete it, use this command:

```shell
wanaku cloud delete integration echo
```

When you delete an integration, Kubernetes stops its pod and deletes its route files ConfigMap. Before the capability stops, it removes its forward from the router.
