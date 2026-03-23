import { test, expect } from "@playwright/test";

test("Read env file", async ({ page }) => {
  await page.goto(process.env.URL);
  await page.getByRole("combobox", { name: "Search" }).click();
  await page.getByRole("combobox", { name: "Search" }).fill("Playwright");
  await page.getByRole("combobox", { name: "Search" }).press("Enter");
  await page.waitForTimeout(10000);
  console.log(
    `${process.env.name} is testing in ${process.env.env} environment`,
  );
});
