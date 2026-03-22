import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await test.step("navigating to url", async () => {
    await page.goto("https://the-internet.herokuapp.com/");
    await page.getByRole("link", { name: "Form Authentication" }).click();
    await page.getByRole("textbox", { name: "Username" }).click();
    await page.getByRole("textbox", { name: "Username" }).fill("damm");
    await page.getByRole("textbox", { name: "Password" }).click();
    await page.getByRole("textbox", { name: "Password" }).fill("Damm@1234");
    await page.getByRole("button", { name: " Login" }).click();
    await expect(page.locator("#flash")).toContainText(
      "Your username is invalid! ×",
    );
  });
});
