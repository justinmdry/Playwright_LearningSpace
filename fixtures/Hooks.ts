/**
 * Custom Playwright test fixtures.
 *
 * Extends the base Playwright `test` so every spec can request `loginP`, `homeP`,
 * and `orderP` directly as test arguments instead of constructing each page object
 * by hand. Import `test`/`expect` from this file (not "@playwright/test") in any
 * spec that needs the page objects.
 */
import {test as base} from "@playwright/test";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import OrderPage from "../pages/orderPage";
import UserClient from "../api/clients/UserClient";
import RegisterClient from "../api/clients/RegisterClient.ts";
import LoginClient from "../api/clients/LoginClient.ts";

type customFixtures = {
    loginP : LoginPage,
    homeP : HomePage,
    orderP : OrderPage,
    userClient : UserClient,
    registerClient : RegisterClient,
    loginClient : LoginClient
};

export const test = base.extend<customFixtures>({
    loginP : async ({page}, use) => {
        const loginP = new LoginPage(page);
        await use(loginP);
    },

    homeP : async ({page}, use) => {
        const homeP = new HomePage(page);
        await use(homeP);
    },

    orderP : async({page}, use) =>{
        const orderP = new OrderPage(page);
        await use(orderP);
    },
    userClient : async({request}, use) => {
        const userClient = new UserClient(request);
        await use(userClient);
    },
    registerClient : async({request}, use) => {
        const registerClient = new RegisterClient(request);
        await use(registerClient);
    },
    loginClient : async({request}, use) => {
        const loginClient = new LoginClient(request);
        await use(loginClient);
    }
});

export {expect} from "@playwright/test";

//Example of hooks
// test.beforeAll(async() =>{
//     console.log("This is before");
// });

/*
If you need to use the page for anything like doing login before doing any features to do with check box deletion you can do 

test.beforeAll(async({page}) => {

})

you would also need to make login page global, would look like
let loginP : LoginPage; at the top of the file not in any test  and then you can remove the const everywhere and just use
loginP = new LoginPage(page);

Use after each to close any resources 
eg page.close()
*/