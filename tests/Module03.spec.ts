import {expect, test}  from"@playwright/test";
import loginPage from "../pages/loginPage";

test("Test for basic navigation", async({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    //go to the page
    await page.goto("http://secure.smartbearsoftware.com/samples/TestComplete12/WebOrders/Login.aspx");
    console.log("Current url " + page.url());
    //go back
    await page.goto("http://google.com");
    console.log("Current url  before go back" + page.url());
    await page.goBack();
    console.log("Current url " + page.url());
    //go forward
    await page.goForward();
    console.log("Current url " + page.url());
})

test("Test for basic log in", async({browser}) =>{
    //Make a context and page
    const context = await browser.newContext();
    const page = await context.newPage();

    //go to the smartbear site
    await page.goto("http://secure.smartbearsoftware.com/samples/TestComplete12/WebOrders/Login.aspx");

    //locate the user name and password fields and fill them with correct information
    await page.getByLabel('Username:').fill('Tester');
    await page.getByLabel('Password:').fill('test');
    //get login button and click it, first option
    await page.locator("#ctl00_MainContent_login_button").click();

    //Second options (for new tab) 
    // const [page2] = await Promise.all([
    //     context.waitForEvent('page'),
    //     page.getByRole('button', { name: 'Login' }).click({modifiers: ['Control']})
    // ]);
    //assert the new url is correct 

    await page.waitForLoadState('domcontentloaded');

    expect(page.url()).toBe("http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/");

    //await page2.bringToFront();

    const menu = page.locator('#ctl00_menu > li');

    console.log(await menu.nth(1).textContent());

    await page.waitForLoadState('domcontentloaded');

    await expect( menu.nth(1)).toHaveText('View all products');
})


