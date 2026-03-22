import { test, expect } from "@playwright/test";

test("DropDown test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.getByRole("link", { name: "Dropdown" }).click();
  const dropdown = page.getByRole("combobox");
  await expect(dropdown).toBeVisible();
  await dropdown.selectOption("Option 1");
  await expect(dropdown).toHaveValue("1");
});
