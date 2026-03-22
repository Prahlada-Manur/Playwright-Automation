import { test, expect } from "@playwright/test";

test("Google logo screenshot", async ({ page }) => {
  await page.goto("https://www.google.com/");
  const logo = page.getByRole("img", { name: "Google" });
  await expect(logo).toBeVisible();
  await logo.screenshot({ path: "./screenshot/google-logo.png" });
});