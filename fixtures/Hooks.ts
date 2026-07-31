import {test as base} from "@playwright/test";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import OrderPage from "../pages/orderPage";

type customFixtures = {
    loginP : LoginPage,
    homeP : HomePage,
    orderP : OrderPage,
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