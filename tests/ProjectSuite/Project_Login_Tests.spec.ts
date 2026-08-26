/**
 * Project Suite - Login tests.
 *
 * Covers a successful login/logout round trip and a failed login with an
 * invalid password. Tagged '@project1' and '@project'.
 *
 * NOTE: The tests in tests/ProjectSuite are the only tests intended for grading.
 */
import {expect, test} from "../../fixtures/Hooks";
import { GlobalData } from "../../data/GlobalData";

test("Test that login and logout flow works correctly", {tag : ['@project1', '@project']},async({loginP, homeP}) => {
        
        //use login Page object to login, all methods can be found in loginPage.ts
        await loginP.loginFeature(GlobalData.username, GlobalData.password);
        //Wait for the content to be loaded
        await loginP.waitForLoad('domcontentloaded');
        //Assert that the url now redirects to the weborders page
        expect(await loginP.currentUrl()).not.toContain(GlobalData.loginUrl);

        //use home page object to logout, all methods can be found in homePage.ts
        await homeP.logoutFromHomePage();
        //Wait for content to be loaded
        await homeP.waitForLoad('networkidle');
        //Assert that user is redirected back to the home page
        expect(await homeP.currentUrl()).toContain(GlobalData.loginUrl);
})

test("Test that login fails gracefully", {tag : ['@project1', '@project']}, async({loginP}) => {

        //use login Page object to login using the wrong password, all methods can be found in loginPage.ts
        await loginP.loginFeature(GlobalData.username, GlobalData.invalidPassword);
        await loginP.waitForLoad('domcontentloaded');
        //Assert that the error message is displayed
        expect(await loginP.readErrorMsg()).toBe(GlobalData.errorMsg);
})