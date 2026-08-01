/**
 * Project Suite - Order deletion tests.
 *
 * Covers deleting the first and last rows of the order grid, verifying the
 * checkbox count and row contents change as expected. Tagged '@project2' and
 * '@project'.
 *
 * NOTE: The tests in tests/ProjectSuite are the only tests intended for grading.
 */
import {expect, test} from "../../fixtures/Hooks";
import { GlobalData } from "../../data/GlobalData";

test("Test that deleting the first order works as intended", {tag : ['@project2', '@project']},async({loginP, homeP}) => {

        //use login Page object to login, all methods can be found in loginPage.ts
        await loginP.loginFeature(GlobalData.username, GlobalData.password);
        //Wait for the content to be loaded
        await loginP.waitForLoad('domcontentloaded');
        //Assert that the url now redirects to the weborders page
        expect(await loginP.currentUrl()).not.toContain(GlobalData.loginUrl);

        expect(await homeP.countCheckBoxes()).toBe(GlobalData.beforeDelete);

        await homeP.completeFirstDeleteTest();

        await homeP.waitForLoad('load');

        expect(await homeP.countCheckBoxes()).toBe(GlobalData.afterDelete);

        expect(await homeP.firstNameChecker()).not.toBe(GlobalData.firstNameCheck);

        //use home page object to logout, all methods can be found in homePage.ts
        await homeP.logoutFromHomePage();
        //Wait for content to be loaded
        await homeP.waitForLoad('networkidle');
        //Assert that user is redirected back to the home page
        expect(await homeP.currentUrl()).toContain(GlobalData.loginUrl);
})

test("Test that deleting the last order works as intended", {tag : ['@project2', '@project']},async({loginP, homeP}) => {

        //use login Page object to login, all methods can be found in loginPage.ts
        await loginP.loginFeature(GlobalData.username, GlobalData.password);
        //Wait for the content to be loaded
        await loginP.waitForLoad('domcontentloaded');
        //Assert that the url now redirects to the weborders page
        expect(await loginP.currentUrl()).not.toContain(GlobalData.loginUrl);

        expect(await homeP.countCheckBoxes()).toBe(GlobalData.beforeDelete);

        await homeP.completeLastDeleteTest();

        await homeP.waitForLoad('load');

        expect(await homeP.countCheckBoxes()).toBe(GlobalData.afterDelete);

        expect(await homeP.lastNameChecker()).not.toContain(GlobalData.lastNameCheck);

        //use home page object to logout, all methods can be found in homePage.ts
        await homeP.logoutFromHomePage();
        //Wait for content to be loaded
        await homeP.waitForLoad('networkidle');
        //Assert that user is redirected back to the home page
        expect(await homeP.currentUrl()).toContain(GlobalData.loginUrl);
})