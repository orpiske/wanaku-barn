# Common: OpenShift Login

Reusable steps for logging in to an OpenShift cluster using a service account token.

## Prerequisites

- `oc` CLI installed
- `OPENSHIFT_API_URL` environment variable set (e.g. `https://api.cluster.example.com:6443`)
- `OPENSHIFT_SA_TOKEN` environment variable set (service account token)

## Steps

### 1. Log in to OpenShift

```bash
oc login "${OPENSHIFT_API_URL}" --token="${OPENSHIFT_SA_TOKEN}" --insecure-skip-tls-verify=true
```

### 2. Verify login

```bash
OC_USER=$(oc whoami 2>/dev/null)
if [ -z "${OC_USER}" ]; then
  echo "FAIL: not logged in to ${OPENSHIFT_API_URL}"
  exit 1
fi
echo "PASS: logged in as ${OC_USER}"
# Expected: the service account name (e.g. system:serviceaccount:<namespace>:<sa-name>)

oc whoami --show-server
# Expected: prints the cluster API URL

oc version
# Expected: prints client and server version info

# The operator plans use OpenShift Routes
oc api-resources --api-group=route.openshift.io -o name | grep -q "^routes"
echo "route-api-available=$?"
# Expected: route-api-available=0
```
