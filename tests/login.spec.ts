import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Login test", async ({ page }) => {
  const url = process.env.URL;
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;
  if (!url || !username || !password) {
    throw new Error("Set URL, USERNAME, and PASSWORD in .env");
  }

  const loginPage = new LoginPage(page);
  await page.goto(url);
  await loginPage.waitForLoginForm();
  await loginPage.typeUserName(username);
  await loginPage.typePassword(password);
  await loginPage.clickLoginButton();
  await loginPage.expectLoggedIn();
});
