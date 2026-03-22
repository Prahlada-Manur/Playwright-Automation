import { test, expect } from "@playwright/test";

test("Date Picker test", async ({ page }) => {
  //     await page.goto('https://jqueryui.com/datepicker/')
  //   const frame=  page.frameLocator('.demo-frame')
  //   frame.locator('#datepicker').fill('10/10/2024');

  //   frame.locator('#datepicker').click();
  //   await frame.locator('.ui-datepicker-today').click()

  await page.goto("https://jqueryui.com/datepicker/");
  await page.locator("iframe").contentFrame().locator("#datepicker").click();
  await page.locator("iframe").contentFrame().getByTitle("Prev").click();
  await page
    .locator("iframe")
    .contentFrame()
    .getByRole("link", { name: "11" })
    .click();
  await expect(
    page.locator("iframe").contentFrame().locator("#datepicker"),
  ).toBeVisible();
});
