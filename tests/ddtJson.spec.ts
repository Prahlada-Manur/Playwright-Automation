import { test } from "@playwright/test";
import google from "../test-data/google.json";

for (const [key, value] of Object.entries(google.FirstData)) {
  test(`Google search — ${key}: ${value}`, async ({ page }) => {
    const url = process.env.URL;
    if (!url) throw new Error("URL is not set in .env");
    await page.goto(url);
    await page.getByRole("combobox", { name: "Search" }).click();
    await page.getByRole("combobox", { name: "Search" }).fill(value);
    await page.getByRole("combobox", { name: "Search" }).press("Enter");
    await page.waitForTimeout(10000);
    console.log(
      `${process.env.name} is testing in ${process.env.env} environment`,
    );
  });
}
