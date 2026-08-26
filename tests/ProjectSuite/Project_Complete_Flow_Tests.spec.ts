/**
 * Project Suite - End-to-end flow test.
 *
 * Covers the full happy path: log in, create an order, verify it appears in the
 * order grid, then log out. Tagged '@project3' and '@project'.
 *
 * NOTE: The tests in tests/ProjectSuite are the only tests intended for grading.
 */
import {expect, test} from "../../fixtures/Hooks";
import { GlobalData } from "../../data/GlobalData";

test("Test that complete flow works correctly", {tag : ['@project3', '@project']},async({loginP, homeP, orderP}) => {

        //use login Page object to login, all methods can be found in loginPage.ts
        await loginP.loginFeature(GlobalData.username, GlobalData.password);
        //Wait for the content to be loaded
        await loginP.waitForLoad('domcontentloaded');
        //Assert that the url now redirects to the weborders page
        expect(await loginP.currentUrl()).not.toContain(GlobalData.loginUrl);

        await homeP.clickToMakeOrder();
        expect(await homeP.currentUrl()).toContain(GlobalData.orderUrl);

        await orderP.completeOrder();

        await orderP.clickToViewAllOrders();
        //Wait for the DOM content to load before clicking the logout button
        await orderP.waitForLoad('domcontentloaded');
        expect(await orderP.currentUrl()).not.toContain(GlobalData.orderUrl);

        expect(await homeP.firstNameChecker()).toBe(GlobalData.addrInfo);

        //use home page object to logout, all methods can be found in homePage.ts
        await homeP.logoutFromHomePage();
        //Wait for content to be loaded
        await homeP.waitForLoad('networkidle');
        //Assert that user is redirected back to the home page
        expect(await homeP.currentUrl()).toContain(GlobalData.loginUrl);
})