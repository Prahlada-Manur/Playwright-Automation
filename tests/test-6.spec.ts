import {test,expect} from "@playwright/test"

test.beforeAll(async()=>{
    console.log('This will run before the tests')
})
test.afterAll(async()=>{
    console.log('this will run after all the tests')
})
test.beforeEach(async({page})=>{
    console.log('This will run before each test')
    await page.goto('https://the-internet.herokuapp.com/')
})
test.afterEach(async()=>{
    console.log('This will run after each test')
})

test('Test 1',async({page})=>{
    await page.goto('https://www.google.com/')
    await expect(page).toHaveTitle('Google')
})

test('Test 2',async({page})=>{
    await page.goto('https://www.youtube.com/')
    await expect(page).toHaveTitle('YouTube')
})