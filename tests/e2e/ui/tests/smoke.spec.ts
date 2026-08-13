import { test, expect } from '@playwright/test';

test('landing page loads', async ({ page }) => {
  await page.goto('./#/');
  await page.locator('text=Loading...').waitFor({ state: 'hidden', timeout: 15_000 });
  await expect(page.locator('h1.title')).toHaveText('Data Stores');
});
