import { test, expect } from "@playwright/test";

test("get text using textContent", async ({ page }) => {
  await page.goto("https://playwright.dev/docs/intro");
  await page.getByRole("heading", { name: "Installation" }).click();
  
  const articleElement = page.getByRole("article");
  const textContent = await articleElement.textContent();
  
  expect(textContent).toContain("Playwright Test is an end-to-end test framework");
  expect(textContent).toContain("test runner");
  expect(textContent).toContain("assertions");
});