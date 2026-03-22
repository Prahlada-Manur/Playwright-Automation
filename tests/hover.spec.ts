import {test,expect} from "@playwright/test";

test('Hover test',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    await page.getByRole('link',{name:'Hovers'}).click();
    const fig1=page.locator('.figure').first();
    fig1.hover();
    await page.getByRole('link',{name:'View profile'}).click();
    await expect(page.getByText('Not Found')).toBeVisible({timeout: 10000});
});