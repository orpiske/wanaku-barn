# Common: Start Wanaku Server Locally

Reusable steps for building and starting Wanaku Server locally, with no authentication and no Kubernetes.

Wanaku Server is the Rust-based governed execution proxy from the
[wanaku-ai/wanaku](https://github.com/wanaku-ai/wanaku) repository. It serves the MCP endpoint, the management API
(tools, resources, prompts, namespaces, forwards) and the embedded admin UI. It replaces the Java router that earlier
versions of these test plans started from this repository.

Only Wanaku Server is started here. Plans that need service catalogs, service templates or data stores must also
start Wanaku Barn (see [start-barn.md](start-barn.md)). Plans that need tools must start an upstream MCP server and
register it as a forward (see [start-test-mcp-server.md](start-test-mcp-server.md)).

## Prerequisites

- Rust toolchain (`cargo`) 1.96 or later, **or** a prebuilt `wanaku-server` binary (set `WANAKU_SERVER_BIN`)
- A checkout of the [wanaku-ai/wanaku](https://github.com/wanaku-ai/wanaku) repository (only when building from
  source)
- `curl` (only for the HTTP health check)

## Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `WANAKU_SERVER_REPO_ROOT` | Path to the `wanaku-ai/wanaku` checkout | `../wanaku` |
| `WANAKU_SERVER_BIN` | Path to a prebuilt `wanaku-server` binary. When set, step 1 is skipped. | _(unset)_ |
| `WANAKU_SERVER_MGMT_PORT` | Management API and admin UI port | `8080` |
| `WANAKU_SERVER_DATA_DIR` | Directory for the registry snapshot of this run | `$(mktemp -d)` |
| `WANAKU_SERVER_LOG` | Log file of the server process | `${WANAKU_SERVER_DATA_DIR}/wanaku-server.log` |

The MCP listener port (`8081`) comes from the embedded pipeline configuration. It is not configurable with an
environment variable. Do not run two local servers on the same host at the same time.

## Output variables

| Variable | Description |
|----------|-------------|
| `WANAKU_SERVER_BIN` | Path to the `wanaku-server` binary |
| `WANAKU_SERVER_URL` | Management API base URL (`http://localhost:8080`). Use it as `--host` for the CLI. |
| `WANAKU_MCP_BASE_URL` | MCP listener base URL (`http://localhost:8081`). The MCP endpoint of a namespace is `${WANAKU_MCP_BASE_URL}/<namespace>/mcp`. |
| `WANAKU_SERVER_PID` | PID of the background server process |
| `WANAKU_SERVER_DATA_DIR` | Directory that holds `registry.json` for this run |

## Steps

### 1. Build Wanaku Server

Skip this step when `WANAKU_SERVER_BIN` points to a prebuilt binary.

The full build embeds the admin UI and needs Node.js and Yarn. The headless build does not include the admin UI and is
sufficient for CLI and MCP test plans. Use `make build` from the repository root for the full build.

```bash
export WANAKU_SERVER_REPO_ROOT="${WANAKU_SERVER_REPO_ROOT:-../wanaku}"

if [ -z "${WANAKU_SERVER_BIN}" ]; then
  (cd "${WANAKU_SERVER_REPO_ROOT}" && cargo build --release -p wanaku-server)
  WANAKU_SERVER_BIN="${WANAKU_SERVER_REPO_ROOT}/target/release/wanaku-server"
fi

if [ -x "${WANAKU_SERVER_BIN}" ]; then
  echo "PASS: ${WANAKU_SERVER_BIN} exists"
else
  echo "FAIL: ${WANAKU_SERVER_BIN} not found or not executable"
  exit 1
fi
export WANAKU_SERVER_BIN
```

### 2. Verify the ports are free

A server left over from an earlier run makes the test results unreliable.

```bash
export WANAKU_SERVER_MGMT_PORT="${WANAKU_SERVER_MGMT_PORT:-8080}"
for PORT in "${WANAKU_SERVER_MGMT_PORT}" 8081; do
  if curl -s -o /dev/null "http://localhost:${PORT}/" 2>/dev/null; then
    echo "FAIL: port ${PORT} is already in use — stop the process that uses it"
    exit 1
  fi
  echo "PASS: port ${PORT} is free"
done
```

### 2b. (Optional) Prepare the test governance configuration

Wanaku Server is fail-safe by default. It denies every `tools/call`, `resources/read` and `prompts/get` request that
no action policy and no evaluator explicitly allows. The error is `No governance policy permits this action.`
(`governance_no_match`) from the action-policy filter, or `evaluator: no_match` from the evaluator filter. Listing
requests (`tools/list`, `resources/list`, `prompts/list`) are not governed.

Plans that call tools, read resources or get prompts must start the server with a test configuration. Keep the
scope narrow: allow only the namespaces that the plan creates for the test. Do not use this configuration outside a
local test instance.

```bash
export WANAKU_SERVER_DATA_DIR="${WANAKU_SERVER_DATA_DIR:-$(mktemp -d)}"
export WANAKU_TEST_GOVERNED_NAMESPACES="${WANAKU_TEST_GOVERNED_NAMESPACES:-default}"
WANAKU_SERVER_CONFIG="${WANAKU_SERVER_DATA_DIR}/wanaku.yaml"

{
  echo "governance:"
  echo "  default:"
  echo "    mode: enforce"
  echo "    no_match: deny"
  echo "    on_failure: deny"
  echo "  namespaces:"
  for NS in $(echo "${WANAKU_TEST_GOVERNED_NAMESPACES}" | tr ',' ' '); do
    echo "    ${NS}:"
    echo "      no_match: allow"
  done
} > "${WANAKU_SERVER_CONFIG}"
export WANAKU_SERVER_CONFIG
echo "PASS: test governance configuration written to ${WANAKU_SERVER_CONFIG}"
```

Explicit deny rules still apply in these namespaces. All other namespaces keep the fail-safe defaults, so a plan can
also verify the default denial (for example in a namespace that is not in `WANAKU_TEST_GOVERNED_NAMESPACES`).

Without `--wanaku-config`, the server reads `./wanaku.yaml` from the current directory if that file exists. A stray
file there changes the governance and bootstrap configuration silently. Run the server from a directory without
`wanaku.yaml`, or always set `WANAKU_SERVER_CONFIG`.

When `WANAKU_SERVER_CONFIG` is set, step 3 passes it with `--wanaku-config`. A plan can append more sections (for
example `forwards`, `plugins` or `action_policy`) to the same file before step 3.

### 3. Start Wanaku Server

Each run uses a new data directory. This keeps the run independent of `$HOME/.wanaku/server` and of earlier runs.
Authentication is disabled by default in Wanaku Server, so no extra configuration is necessary.

The server process inherits the exported environment. Export other variables before this step when the plan needs
them, for example `RUST_LOG`, `PRAXIS_LOG_FORMAT=json` or `WANAKU_AUTH_ISSUER`.

```bash
export WANAKU_SERVER_DATA_DIR="${WANAKU_SERVER_DATA_DIR:-$(mktemp -d)}"
export WANAKU_SERVER_LOG="${WANAKU_SERVER_LOG:-${WANAKU_SERVER_DATA_DIR}/wanaku-server.log}"
export WANAKU_SERVER_URL="http://localhost:${WANAKU_SERVER_MGMT_PORT}"
export WANAKU_MCP_BASE_URL="http://localhost:8081"

WANAKU_MGMT_LISTEN="0.0.0.0:${WANAKU_SERVER_MGMT_PORT}" \
WANAKU_PERSIST_BACKEND=file \
WANAKU_PERSIST_PATH="${WANAKU_SERVER_DATA_DIR}" \
  "${WANAKU_SERVER_BIN}" ${WANAKU_SERVER_CONFIG:+--wanaku-config "${WANAKU_SERVER_CONFIG}"} \
  > "${WANAKU_SERVER_LOG}" 2>&1 &
WANAKU_SERVER_PID=$!
export WANAKU_SERVER_PID
echo "Wanaku Server started with PID ${WANAKU_SERVER_PID} (data: ${WANAKU_SERVER_DATA_DIR})"
```

### 4. Wait for health

`curl` is used here to test HTTP-level readiness. `GET /health` returns the standard response envelope.

```bash
MAX_RETRIES=30
for i in $(seq 1 ${MAX_RETRIES}); do
  HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "${WANAKU_SERVER_URL}/health" 2>/dev/null || echo "000")
  if [ "${HTTP_CODE}" = "200" ]; then
    echo "PASS: Wanaku Server is healthy (attempt ${i})"
    break
  fi
  if [ "${i}" -eq "${MAX_RETRIES}" ]; then
    echo "FAIL: Wanaku Server not healthy after ${MAX_RETRIES} attempts (last HTTP ${HTTP_CODE})"
    tail -20 "${WANAKU_SERVER_LOG}"
    kill "${WANAKU_SERVER_PID}" 2>/dev/null || true
    exit 1
  fi
  sleep 1
done
```

### 5. Verify the MCP listener

The MCP listener accepts only `/<namespace>/mcp`. The `default` namespace always exists.

```bash
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" -X POST "${WANAKU_MCP_BASE_URL}/default/mcp" \
  -H "Content-Type: application/json" -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}')
if [ "${HTTP_CODE}" = "200" ]; then
  echo "PASS: MCP endpoint ${WANAKU_MCP_BASE_URL}/default/mcp answers"
else
  echo "FAIL: MCP endpoint returned HTTP ${HTTP_CODE}"
  exit 1
fi
```

### 6. Verify the CLI can connect

Use the CLI jar from this repository (see
[contributing-test-plans.md](../../../docs/contributing-test-plans.md#use-the-wanaku-cli-not-raw-api-clients)).
Wanaku Server has no built-in authentication, so pass `--no-auth`.

```bash
CLI_JAR="${CLI_JAR:-apps/wanaku-cli/target/quarkus-app/quarkus-run.jar}"
java -jar "${CLI_JAR}" tools list --host "${WANAKU_SERVER_URL}" --no-auth --plain
EXIT_CODE=$?
if [ "${EXIT_CODE}" -eq 0 ]; then
  echo "PASS: CLI can connect to Wanaku Server"
else
  echo "FAIL: CLI cannot connect to Wanaku Server (exit code ${EXIT_CODE})"
  exit 1
fi
```

## Restart

Some plans verify that the registry survives a restart. Stop the server with `SIGTERM` (see [Shutdown](#shutdown)),
then run steps 3 and 4 again with the same `WANAKU_SERVER_DATA_DIR`. The server writes `registry.json` on an orderly
shutdown, so a `SIGKILL` loses the latest changes.

## Shutdown

Stop the server with the PID captured at startup. Then remove the data directory of the run.

```bash
if [ -n "${WANAKU_SERVER_PID}" ]; then
  kill "${WANAKU_SERVER_PID}" 2>/dev/null || true
  wait "${WANAKU_SERVER_PID}" 2>/dev/null || true
  echo "PASS: Wanaku Server stopped"
fi
rm -rf "${WANAKU_SERVER_DATA_DIR}"
```

Do **not** use `kill -9`. It bypasses the orderly Pingora shutdown and the final registry snapshot. If Pingora worker
processes remain, find them with `lsof -ti :8081` and stop them with `SIGTERM`.
