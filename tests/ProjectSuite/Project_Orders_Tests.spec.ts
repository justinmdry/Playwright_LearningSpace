import {expect, test} from "../../fixtures/Hooks";
import { GlobalData } from "../../data/GlobalData";

test("Test that deleting the first order works as intended", {tag : ['@project2', '@project']},async({page, loginP, homeP}) => {
        
        //use login Page object to login, all methods can be found in loginPage.ts
        await loginP.loginFeature(GlobalData.username, GlobalData.password);
        //Wait for the content to be loaded
        await page.waitForLoadState('domcontentloaded');
        //Assert that the url now redirects to the weborders page
        expect(page.url()).toContain('http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/');

        expect(await homeP.countCheckBoxes()).toBe(GlobalData.beforeDelete);

        await homeP.completeFirstDeleteTest();

        await page.waitForLoadState('load');

        expect(await homeP.countCheckBoxes()).toBe(GlobalData.afterDelete);

        expect(await homeP.firstNameChecker()).not.toBe(GlobalData.firstNameCheck);
})

test("Test that deleting the last order works as intended", {tag : ['@project2', '@project']},async({page, loginP, homeP}) => {
        
        //use login Page object to login, all methods can be found in loginPage.ts
        await loginP.loginFeature(GlobalData.username, GlobalData.password);
        //Wait for the content to be loaded
        await page.waitForLoadState('domcontentloaded');
        //Assert that the url now redirects to the weborders page
        expect(page.url()).toContain('http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/');

        expect(await homeP.countCheckBoxes()).toBe(GlobalData.beforeDelete);

        await homeP.completeLastDeleteTest();

        await page.waitForLoadState('load');

        expect(await homeP.countCheckBoxes()).toBe(GlobalData.afterDelete);

        expect(await homeP.lastNameChecker()).not.toContain(GlobalData.lastNameCheck);
})