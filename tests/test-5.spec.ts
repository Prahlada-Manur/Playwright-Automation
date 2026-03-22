import { test, expect } from "@playwright/test";

const testData = [
  { searchValue: "playwright" },
  { searchValue: "selenium" },
  { searchValue: "cypress" }
];

for (const testParams of testData) {
  const { searchValue } = testParams;
  test(`Search for ${searchValue}`, async ({ page }) => {
    await page.goto("https://www.youtube.com/");
    const searchBox = page.getByPlaceholder("Search");
    await searchBox.click();
    await searchBox.fill(searchValue);
    await searchBox.press("Enter");
    await expect(page).toHaveURL(/youtube.com\/results/);
  });
}
