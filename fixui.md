# Fix UI E2E Tests — Port Mismatch

## Problem

The router backend listens on port **8180** (`apps/wanaku-barn-backend/src/main/resources/application.properties:7`), but the CI workflow and Playwright test defaults hardcode port **8080**. The CI health check times out after 60s and the tests never run.

## Files to Change

### 1. `.github/workflows/ui-e2e-tests.yml`

**Line 123** — Change health check port:

```diff
-          if curl -sf http://localhost:8080/q/health/ready > /dev/null 2>&1; then
+          if curl -sf http://localhost:8180/q/health/ready > /dev/null 2>&1; then
```

**After line 136** — Add env var to the "Run Playwright Tests" step:

```diff
     - name: Run Playwright Tests
       working-directory: tests/e2e/ui
       run: npx playwright test
+      env:
+        WANAKU_ROUTER_URL: http://localhost:8180
```

### 2. `tests/e2e/ui/playwright.config.ts`

**Line 3** — Update default port:

```diff
-const routerUrl = process.env.WANAKU_ROUTER_URL ?? 'http://localhost:8080';
+const routerUrl = process.env.WANAKU_ROUTER_URL ?? 'http://localhost:8180';
```

### 3. `tests/e2e/ui/tests/dashboard.spec.ts`

**Line 4** — Update default port:

```diff
-const routerUrl = process.env.WANAKU_ROUTER_URL ?? 'http://localhost:8080';
+const routerUrl = process.env.WANAKU_ROUTER_URL ?? 'http://localhost:8180';
```

## Steps

1. Create branch: `git checkout -b quick-fix/fix-ui-e2e-port`
2. Apply the 4 edits above (3 files)
3. Stage: `git add .github/workflows/ui-e2e-tests.yml tests/e2e/ui/playwright.config.ts tests/e2e/ui/tests/dashboard.spec.ts`
4. Commit: `git commit -m "chore: fix UI E2E tests port mismatch"`
5. Push: `git push -u origin quick-fix/fix-ui-e2e-port`
6. PR: `gh pr create --title "chore: fix UI E2E tests port mismatch" --body "..."`
