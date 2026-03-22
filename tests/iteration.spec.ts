import { test, expect } from "@playwright/test";

test('Iteration test', async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");

  const links = page.locator('a');
  const count = await links.count();

  for (let i = 0; i < count; i++) {
    const linkText = await links.nth(i).textContent();

    await Promise.all([
      page.locator(`a:has-text("${linkText}")`).click()
    ]);

    await expect(page.locator('h1, h2, h3')).toBeVisible();

    await page.goBack();
    await page.waitForLoadState('domcontentloaded');
  }
});