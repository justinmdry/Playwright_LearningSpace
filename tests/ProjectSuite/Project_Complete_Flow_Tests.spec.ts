import {expect, test} from "../../fixtures/Hooks";
import { GlobalData } from "../../data/GlobalData";

test("Test that login and logout flow works correctly", {tag : ['@project3', '@project']},async({page, loginP, homeP, orderP}) => {
        
        //use login Page object to login, all methods can be found in loginPage.ts
        await loginP.loginFeature(GlobalData.username, GlobalData.password);
        //Wait for the content to be loaded
        await page.waitForLoadState('domcontentloaded');
        //Assert that the url now redirects to the weborders page
        expect(page.url()).toContain('http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/');

        await homeP.clickToMakeOrder();
        expect(page.url()).toContain('http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/Process.aspx');

        await orderP.completeOrder();

        await orderP.clickToViewAllOrders();
        //Wait for the DOM content to load before clicking the logout button
        await page.waitForLoadState('domcontentloaded');
        expect(page.url()).toContain('http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/');

        expect(await homeP.firstNameChecker()).toBe(GlobalData.addrInfo);
        
        //use home page object to logout, all methods can be found in homePage.ts
        await homeP.logoutFromHomePage();
        //Wait for content to be loaded
        await page.waitForLoadState('load');
        //Assert that user is redirected back to the home page
        expect(page.url()).toContain('http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/Default.aspx');
})