import type { Locator, Page } from "@playwright/test";

export class LoginPage {
  private readonly page: Page;
  private readonly userNameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.getByRole("textbox", { name: "Username" });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  async typeUserName(username: string) {
    await this.userNameInput.fill(username);
  }

  async typePassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  /** Call after navigation to /login — form is ready. */
  async waitForLoginForm() {
    await this.userNameInput.waitFor({ state: "visible" });
  }

  /** Call after successful submit — login form is gone; Heroku demo shows Secure Area. */
  async expectLoggedIn() {
    await this.page
      .getByRole("heading", { name: "Secure Area", exact: true })
      .waitFor();
  }
}
