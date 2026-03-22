import {test,expect} from "@playwright/test"

test("Test to navigate and validate the title of the page",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/")
    await expect(page).toHaveTitle("The Internet")
    await page.getByRole('link', { name: 'Checkboxes' }).click();
    await expect(page.getByRole('heading', { name: 'Checkboxes' })).toBeVisible();
    await page.getByRole('checkbox').first().check();
    await expect(page.getByRole('checkbox').first()).toBeChecked();
})

