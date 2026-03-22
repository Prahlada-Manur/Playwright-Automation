import{test,expect} from "@playwright/test";

test('Key Press test',async({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/");
    await page.getByRole('link',{name:'Key Presses'}).click()
    const key = page.locator('#target');
    await key.fill('Playwright');
    await key.press('Enter');
})