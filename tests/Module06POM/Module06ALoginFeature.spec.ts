import {expect, test} from "@playwright/test";
import LoginPage from "../../pages/loginPage";
import { GlobalData } from "../../data/GlobalData";

test("Simple login test using POM", async({page}) => {
        //create the login page object
        const loginP : LoginPage = new LoginPage(page);
        //Call methods from POM structure
        await loginP.loginFeature(GlobalData.username, GlobalData.password);
        await page.waitForLoadState('domcontentloaded');
        expect(page.url()).toBe("http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/");
})

test("Simple failing login test", async({page}) =>{
    const loginP : LoginPage = new LoginPage(page);

    await loginP.loginFeature(GlobalData.username, GlobalData.invalidPassword);
    await page.waitForLoadState('domcontentloaded');
    expect(await loginP.readErrorMsg()).toContain(GlobalData.errorMsg);
})