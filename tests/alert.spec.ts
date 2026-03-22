import { test, expect } from "@playwright/test";

test("Alert Test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.getByRole("link", { name: "JavaScript Alerts" }).click();
  page.once("dialog", (dialog) => {
    dialog.accept();
    console.log(dialog.message());
    console.log(dialog.type());
    
  });
  await page.getByRole("button", { name: "Click for JS Alert" }).click();
});

test("Popups Test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.getByRole("link", { name: "JavaScript Alerts" }).click();
  page.once("dialog", (dialog) => {
    dialog.accept();
    console.log(dialog.message());
  });
  await page.getByRole("button", { name: "Click for JS Confirm" }).click();
});

test("Prompt Test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.getByRole("link", { name: "JavaScript Alerts" }).click();
  page.once("dialog",async (dialog) => {
    console.log(dialog.message());
    await dialog.accept("Playwright");
  });
  await page.getByRole("button", { name: "Click for JS Prompt" }).click();
});