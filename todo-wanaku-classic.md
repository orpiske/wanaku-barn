# Wanaku Classic — Integration Tasks

These tasks modify the Java Wanaku project (`wanaku` repo) to integrate with Wanaku Praxis (Rust), which replaces Classic's MCP routing engine. Praxis is now the single entry point for MCP traffic and REST APIs. Classic becomes an internal backend service for service catalogs, templates, data stores, chat, and code execution.

## Context: What Praxis Already Provides

The Rust side is complete. Praxis now exposes:

- **Port 8081**: MCP protocol (tools/list, tools/call, resources, prompts, etc.)
- **Port 9090**: REST management API + Admin UI
  - Direct: `/api/v1/tools`, `/api/v1/resources`, `/api/v1/prompts`, `/api/v1/forwards`, `/api/v1/namespaces`, `/api/v1/services`, `/api/v1/interactions`, `/healthz`, `/admin/*`
  - Proxied to Classic (`WANAKU_CLASSIC_URL`): `/api/v1/service-catalog`, `/api/v1/service-template`, `/api/v1/data-store`, `/api/v1/capabilities`, `/api/v1/chat`, `/api/v1/management/info`, `/api/v1/management/statistics`, `/api/v1/toolset-repos`, `/api/v2/code-execution`, `/api/v2/tool-calls`
- **Port 8082**: Ollama reverse proxy (configurable upstream via `WANAKU_OLLAMA_UPSTREAM`)

Praxis container image: `quay.io/wanaku/wanaku-praxis:latest` (built from `Containerfile` in wanaku-praxis repo).

## Task 1: Remove MCP Server from Classic

Classic's MCP server is no longer needed — Praxis handles all MCP protocol traffic.

### What to remove

- **`quarkus-mcp-server-http` extension** from `apps/wanaku-router-backend/pom.xml`
- **MCP namespace path configs** from `apps/wanaku-router-backend/src/main/resources/application.properties` (lines ~31-46, the `/public/mcp`, `/wanaku-internal/mcp`, `/ns-*/mcp` entries)
- **MCP-related JAX-RS resources** that Praxis now handles directly:
  - `ToolsResource.java` — `/api/v1/tools`
  - `ResourcesResource.java` — `/api/v1/resources`
  - `PromptsResource.java` — `/api/v1/prompts`
  - `ForwardsResource.java` — `/api/v1/forwards`
  - `NamespacesResource.java` — `/api/v1/namespaces`
- **Service discovery endpoint** (`DiscoveryResource.java` at `/api/v1/management/discovery`) — capability service registration moves to Praxis's `/api/v1/services`

### What to keep

- `ServiceCatalogResource.java` — `/api/v1/service-catalog`
- `ServiceTemplateResource.java` — `/api/v1/service-template`
- `DataStoresResource.java` — `/api/v1/data-store`
- `CapabilitiesResource.java` — `/api/v1/capabilities`
- `LlmChatResource.java` — `/api/v1/chat`
- `InfoResource.java` — `/api/v1/management/info/version`
- `StatisticsResource.java` — `/api/v1/management/statistics`
- `CodeExecutionResource.java` — `/api/v2/code-execution`
- `ToolCallResource.java` — `/api/v2/tool-calls`
- `ToolsetReposResource.java` — `/api/v1/toolset-repos`
- All gRPC service definitions (proto files) — capability services still use them
- The capability SDK (`capabilities-quarkus-sdk`) — capabilities still serve gRPC
- The Admin UI build (`ui/admin`) — its build artifact will be served by Praxis

### Verification

- `mvn verify` passes
- Classic starts on port 8080 without MCP endpoints
- Remaining REST APIs (`/api/v1/service-catalog`, etc.) still respond

---

## Task 2: Update Operator for Separate Deployments

The K8s operator needs to deploy Praxis and Classic as separate Deployments instead of a single router pod.

### Changes

#### `WanakuRouterSpec.java`
Add a `PraxisSpec` nested class:
```java
public static class PraxisSpec {
    private boolean enabled = true;
    private String image = "quay.io/wanaku/wanaku-praxis:latest";
    private String imagePullPolicy = "IfNotPresent";
    private List<WanakuTypes.EnvVar> env;
    // getters/setters
}
```
Add `private PraxisSpec praxis;` to `WanakuRouterSpec`.

#### `RouterResourceFactory` (or equivalent reconciler logic)
When `spec.praxis` is present:
- Create a **Praxis Deployment** with container:
  - Image: `spec.praxis.image`
  - Ports: 8081 (MCP), 9090 (REST/UI)
  - Env: `WANAKU_CLASSIC_URL=http://internal-{name}-classic:8080`, `WANAKU_MGMT_LISTEN=0.0.0.0:9090`, plus any `spec.praxis.env` entries
  - Liveness probe: `GET /healthz` on port 9090
  - Readiness probe: `GET /healthz` on port 9090
- Create a **Praxis ClusterIP Service** exposing ports 8081 and 9090
- Modify the **Classic Deployment** to remain as-is but on an internal-only service
- Create an **internal Classic ClusterIP Service** named `internal-{name}-classic` on port 8080 (not exposed via Ingress)
- **Ingress/Route** should point to the Praxis service (ports 8081/9090), not Classic

#### Capability service registration
When the operator deploys a `WanakuCapability`, it should register the capability's gRPC address with Praxis instead of Classic:
```
POST http://internal-{routerRef}-praxis:9090/api/v1/services
{
  "name": "http",
  "address": "internal-{capabilityName}:9000",
  "service_type": "tool-invoker"
}
```

#### Service templates
- `wanaku-router-service-internal.yaml` — update or create a second template for the Praxis service
- `wanaku-capability-deployment.yaml` — change `WANAKU_SERVICE_REGISTRATION_URI` to point at Praxis's `/api/v1/services` endpoint (or keep pointing at Classic if you decide capabilities should still register there, with Praxis proxying the call)

### CRD sample update
Update `apps/wanaku-operator/samples/wanaku-router.yaml`:
```yaml
spec:
  router:
    image: quay.io/wanaku/wanaku-router-backend:0.3.0
  praxis:
    enabled: true
    image: quay.io/wanaku/wanaku-praxis:latest
```

### Verification

- `mvn verify` on operator module
- Deploy `WanakuRouter` with praxis enabled — two pods come up
- `curl http://praxis-service:8081/mcp` returns MCP response
- `curl http://praxis-service:9090/api/v1/tools` returns tools list
- `curl http://praxis-service:9090/api/v1/service-catalog` proxies to Classic

---

## Task 3: Update docker-compose

### Changes

Update `deploy/docker-compose/docker-compose-noauth.yml` (or create a new `docker-compose-praxis.yml` overlay):

Add Praxis as the user-facing service:
```yaml
wanaku-praxis:
  image: quay.io/wanaku/wanaku-praxis:latest
  environment:
    WANAKU_CLASSIC_URL: "http://wanaku-router:8080"
    WANAKU_MGMT_LISTEN: "0.0.0.0:9090"
    WANAKU_PERSIST_BACKEND: "file"
    WANAKU_PERSIST_PATH: "/data/registry"
  ports:
    - "8081:8081"
    - "9090:9090"
  depends_on:
    wanaku-router:
      condition: service_healthy
```

Modify the Classic (`wanaku-router`) service:
- Remove external port mappings (Classic should not be directly accessible)
- Keep the healthcheck so Praxis can depend on it

If using `network_mode: host` (as existing compose files do), all services share localhost. Adjust `WANAKU_CLASSIC_URL` to `http://localhost:8080`.

### Verification

- `docker compose up` starts both services
- `curl localhost:8081/mcp` → MCP response (via Praxis)
- `curl localhost:9090/api/v1/tools` → tools list (Praxis direct)
- `curl localhost:9090/api/v1/service-catalog` → proxied to Classic
- Classic port 8080 not in the exposed ports list

---

## Deferred Questions (do NOT address in these tasks)

1. **Authentication:** How auth works end-to-end is TBD.
2. **Port consolidation:** Praxis opens 8081 + 8082 + 9090. May consolidate later.
3. **CLI migration:** CLI defaults to `--host :8080`. Needs retargeting to `:9090`.
