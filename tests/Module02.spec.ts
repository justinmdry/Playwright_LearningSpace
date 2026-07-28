import {test} from "@playwright/test";

test("Test to open the smartbear website", async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    //go to the page
    await page.goto("http://secure.smartbearsoftware.com/samples/TestComplete12/WebOrders/Login.aspx");
});