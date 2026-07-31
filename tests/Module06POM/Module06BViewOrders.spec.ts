import {expect, test} from "../../fixtures/Hooks";
import { GlobalData } from "../../data/GlobalData";


test("Log in with delete of first check box", async({page, loginP, homeP}) => {
        
        //Call methods from POM structure
        await loginP.loginFeature(GlobalData.username, GlobalData.password);
        await page.waitForLoadState('domcontentloaded');

        expect(page.url()).toBe("http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/");

        expect(await homeP.countCheckBoxes()).toBe(GlobalData.beforeDelete);

        await homeP.completeFirstDeleteTest();

        await page.waitForLoadState('domcontentloaded');

        expect(await homeP.countCheckBoxes()).toBe(GlobalData.afterDelete);
})