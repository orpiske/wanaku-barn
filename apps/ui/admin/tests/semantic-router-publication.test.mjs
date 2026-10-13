import assert from 'node:assert/strict';
import { after, afterEach, beforeEach, mock, test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';
import { act, createElement } from 'react';
import { createServer } from 'vite';

// Load the production TSX with the existing build tool and render real Carbon components.
const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost',
  pretendToBeVisual: true,
});
for (const name of ['window', 'document', 'Node', 'Element', 'HTMLElement', 'getComputedStyle']) {
  globalThis[name] = dom.window[name];
}
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
globalThis.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
dom.window.matchMedia = () => ({
  matches: false,
  addEventListener() {},
  removeEventListener() {},
});
dom.window.HTMLElement.prototype.scrollIntoView = () => {};
const { createRoot } = await import('react-dom/client');
const server = await createServer({
  configFile: false,
  root: fileURLToPath(new URL('..', import.meta.url)),
  server: { middlewareMode: true, hmr: false, ws: false, watch: null },
});
const { SemanticRouterWizard } = await server.ssrLoadModule('/src/Pages/SemanticRouters/SemanticRouterWizard.tsx');
const { semanticRouterApi } = await server.ssrLoadModule('/src/Pages/SemanticRouters/api.ts');

const definition = {
  id: 'router-1',
  name: 'Support router',
  description: 'Routes support requests',
  toolName: 'support',
  profile: 'message-to-string/v1',
  expertId: 'support-expert',
  semanticInput: 'message',
  instructions: 'Choose the appropriate support action',
  actions: [],
  examples: [],
};
const publication = {
  revision: 'revision-1',
  catalogName: 'support-catalog',
  sha256: 'abc123',
  mainFile: 'service/router.camel.yaml',
};
let root;
let container;
let onSaved;
let onClose;
let scrollIntoView;

beforeEach(() => {
  container = document.createElement('div');
  document.body.append(container);
  root = createRoot(container);
  onSaved = mock.fn();
  onClose = mock.fn();
  scrollIntoView = mock.method(dom.window.HTMLElement.prototype, 'scrollIntoView');
  mock.method(semanticRouterApi, 'revisions', async () => []);
  mock.method(semanticRouterApi, 'validate', async () => ({ valid: true, errors: [] }));
  mock.method(semanticRouterApi, 'save', async (draft) => draft);
  mock.method(semanticRouterApi, 'publish', async () => publication);
});

afterEach(async () => {
  await act(async () => root.unmount());
  container.remove();
  mock.restoreAll();
});
after(async () => {
  await server.close();
  dom.window.close();
});

function button(label) {
  const found = [...document.querySelectorAll('button')].find((element) => element.textContent === label);
  assert.ok(found, `Button "${label}" is present`);
  return found;
}

async function click(label) {
  await act(async () => {
    const target = button(label);
    target.focus();
    target.click();
  });
}

async function openReview() {
  await act(async () => root.render(createElement(SemanticRouterWizard, {
    initial: definition,
    actions: [],
    experts: [],
    onSaved,
    onClose,
  })));
  for (let step = 0; step < 4; step++) await click('Next');
}

function successConfirmation() {
  return [...document.querySelectorAll('[role="status"]')].find((element) =>
    element.textContent.includes('Catalog published successfully'));
}

function assertFeedbackVisible() {
  const heading = document.querySelector('.semantic-router-step-title');
  assert.equal(document.activeElement, heading);
  assert.ok(scrollIntoView.mock.calls.some((call) =>
    call.this === heading && call.arguments[0]?.block === 'start'));
}

test('successful publication announces completion, returns focus, and keeps deployment details available', async () => {
  const pending = Promise.withResolvers();
  semanticRouterApi.publish.mock.mockImplementation(() => pending.promise);
  await openReview();
  scrollIntoView.mock.resetCalls();
  await click('Publish catalog');

  assert.equal(button('Publishing…').disabled, true);
  assert.equal(successConfirmation(), undefined);
  await act(async () => pending.resolve(publication));

  assert.ok(successConfirmation());
  assertFeedbackVisible();
  assert.ok(document.querySelector('[role="dialog"]'));
  assert.match(document.body.textContent, /Deployment instructions/);
  assert.match(document.body.textContent, /support-catalog/);
  assert.equal(onClose.mock.callCount(), 0);
  assert.equal(onSaved.mock.callCount(), 2);
});

test('publication failure keeps the wizard open with an error and allows a successful retry', async () => {
  semanticRouterApi.publish.mock.mockImplementationOnce(async () => {
    throw new Error('Catalog publication failed');
  });
  await openReview();
  scrollIntoView.mock.resetCalls();
  await click('Publish catalog');

  assert.ok(document.querySelector('[role="dialog"]'));
  assert.match(document.body.textContent, /Request failed.*Catalog publication failed/);
  assert.equal(successConfirmation(), undefined);
  assert.equal(button('Publish catalog').disabled, false);
  assertFeedbackVisible();
  assert.equal(onClose.mock.callCount(), 0);

  await click('Publish catalog');
  assert.ok(successConfirmation());
  assert.doesNotMatch(document.body.textContent, /Request failed/);
});

test('publication scrolls feedback into view when the review heading is already focused', async () => {
  await openReview();
  assert.equal(document.activeElement.textContent, 'Review and publication');
  scrollIntoView.mock.resetCalls();
  // Safari mouse clicks can leave focus on the heading while the user has scrolled down.
  await act(async () => button('Publish catalog').click());

  assert.ok(successConfirmation());
  assertFeedbackVisible();
});

test('a failed republish clears the previous success confirmation', async () => {
  await openReview();
  await click('Publish catalog');
  assert.ok(successConfirmation());

  semanticRouterApi.publish.mock.mockImplementation(async () => {
    throw new Error('Publication service unavailable');
  });
  await click('Publish catalog');

  assert.equal(successConfirmation(), undefined);
  assert.match(document.body.textContent, /Publication service unavailable/);
  assert.ok(document.querySelector('[role="dialog"]'));
});

test('loading a previously published revision does not announce a new publication', async () => {
  semanticRouterApi.revisions.mock.mockImplementation(async () => [publication]);
  mock.method(semanticRouterApi, 'resolve', async () => publication);
  await openReview();

  assert.match(document.body.textContent, /support-catalog/);
  assert.equal(successConfirmation(), undefined);
  assert.equal(semanticRouterApi.publish.mock.callCount(), 0);
});
