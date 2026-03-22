import { test, expect } from "@playwright/test";

test("Test to navigate and validate the title of the page", async ({
  page,
}) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await expect(page).toHaveTitle("The Internet");

  const context2= await page.context().newPage();
    await context2.goto("https://www.youtube.com/");
    await expect(context2).toHaveTitle("YouTube");
});
