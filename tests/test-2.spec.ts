import { test, expect } from "@playwright/test";

test.describe("Smoke testing", () => {
  test("test 2", async ({ page }) => {
    await page.goto("https://www.youtube.com/");
    const place = page.getByPlaceholder("Search");
    await place.click();
    await place.fill("playwright");
    await place.press("Enter");
  });

  test("DropDown test", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");
    await page.getByRole("link", { name: "Dropdown" }).click();
    const dropdown = page.getByRole("combobox");
    await expect(dropdown).toBeVisible();
    await dropdown.selectOption("Option 1");
    await expect(dropdown).toHaveValue("1");
  });
});

test.describe("Regression testing", () => {
  test("Test to navigate and validate the title of the page", async ({
    page,
  }) => {
    await page.goto("https://the-internet.herokuapp.com/");
    await expect(page).toHaveTitle("The Internet");
  });
});
