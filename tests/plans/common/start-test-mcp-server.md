# Common: Start an Upstream Test MCP Server

Reusable steps for starting a local upstream MCP server and registering it with Wanaku Server as a forward.

Wanaku Server does not execute tools itself. It discovers tools, resources and prompts from upstream MCP servers that
are registered as forwards, and it forwards MCP calls to them. Plans that need tools, resources or prompts in the
registry use the MCP reference server
[`@modelcontextprotocol/server-everything`](https://www.npmjs.com/package/@modelcontextprotocol/server-everything)
as a predictable upstream. It supplies:

- Tools, for example `echo` (argument `message`) and `get-sum` (arguments `a` and `b`)
- Static resources (for example `architecture.md`)
- Prompts, for example `simple-prompt` and `args-prompt`

Use the [Camel Integration Capability](start-cic.md) instead when the plan tests Camel routes or service catalogs.

## Prerequisites

- Wanaku Server started (see [start-server.md](start-server.md)). `WANAKU_SERVER_URL` must be set.
- Node.js 18+ with `npx`
- `CLI_JAR` set (see [start-server.md](start-server.md))

## Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `TEST_MCP_PACKAGE` | npm package and version of the reference server | `@modelcontextprotocol/server-everything@1.0.0` |
| `TEST_MCP_PORT` | Port of the reference server | `3001` |
| `TEST_MCP_FORWARD` | Forward name in Wanaku Server | `everything` |
| `TEST_MCP_NAMESPACE` | Wanaku namespace for the forward | `default` |

## Output variables

| Variable | Description |
|----------|-------------|
| `TEST_MCP_URL` | Streamable HTTP endpoint of the reference server (`http://localhost:3001/mcp`) |
| `TEST_MCP_PID` | PID of the reference server process |

## Steps

### 1. Start the reference server

```bash
export TEST_MCP_PACKAGE="${TEST_MCP_PACKAGE:-@modelcontextprotocol/server-everything@1.0.0}"
export TEST_MCP_PORT="${TEST_MCP_PORT:-3001}"
export TEST_MCP_URL="http://localhost:${TEST_MCP_PORT}/mcp"
TEST_MCP_LOG="$(mktemp)"

PORT="${TEST_MCP_PORT}" npx -y "${TEST_MCP_PACKAGE}" streamableHttp > "${TEST_MCP_LOG}" 2>&1 &
TEST_MCP_PID=$!
export TEST_MCP_PID

for i in $(seq 1 30); do
  if grep -q "listening on port ${TEST_MCP_PORT}" "${TEST_MCP_LOG}"; then
    echo "PASS: reference MCP server listens on ${TEST_MCP_URL}"
    break
  fi
  if [ "${i}" -eq 30 ]; then
    echo "FAIL: reference MCP server did not start"
    cat "${TEST_MCP_LOG}"
    exit 1
  fi
  sleep 2
done
```

### 2. Register the forward

```bash
export TEST_MCP_FORWARD="${TEST_MCP_FORWARD:-everything}"
export TEST_MCP_NAMESPACE="${TEST_MCP_NAMESPACE:-default}"

java -jar "${CLI_JAR}" forwards add --host "${WANAKU_SERVER_URL}" --no-auth \
  --name "${TEST_MCP_FORWARD}" --service "${TEST_MCP_URL}" --namespace "${TEST_MCP_NAMESPACE}"
[ $? -eq 0 ] && echo "PASS: forward '${TEST_MCP_FORWARD}' registered" \
  || { echo "FAIL: could not register forward '${TEST_MCP_FORWARD}'"; exit 1; }
```

Register the reference server only once per Wanaku Server. Wanaku Server keys tools, resources and prompts by name
across all namespaces. A second forward to the same upstream (or to another upstream with the same tool names) moves
the entries to the namespace of the second forward. Removing that forward then deletes them. To test more than one
namespace, start a second reference server on another port with another forward name, and expect the same collision.
Use `forwards refresh --name "${TEST_MCP_FORWARD}"` to restore the entries after a collision.

### 3. Verify the tools were discovered

Wanaku Server discovers the upstream entries when the forward is created.

```bash
OUTPUT=$(java -jar "${CLI_JAR}" tools list --host "${WANAKU_SERVER_URL}" --no-auth --plain 2>&1)
echo "${OUTPUT}" | grep -q "echo" && echo "PASS: tool 'echo' discovered" \
  || { echo "FAIL: tool 'echo' not discovered"; echo "${OUTPUT}"; exit 1; }
```

## Shutdown

Remove the forward first. Wanaku Server also removes the entries that it discovered from the forward.

```bash
java -jar "${CLI_JAR}" forwards remove --host "${WANAKU_SERVER_URL}" --no-auth \
  --name "${TEST_MCP_FORWARD:-everything}" 2>/dev/null || true
if [ -n "${TEST_MCP_PID}" ]; then
  kill "${TEST_MCP_PID}" 2>/dev/null || true
  wait "${TEST_MCP_PID}" 2>/dev/null || true
fi
echo "PASS: reference MCP server stopped"
```
