import {Page} from "@playwright/test";
import { GlobalData } from "../data/GlobalData";
import BasePage from "./basePage";

/**
 * Page object for the WebOrders login page (Login.aspx).
 * Provides individual field/button actions plus a combined `loginFeature`
 * helper that performs a full login in one call.
 */
export default class LoginPage extends BasePage{

    private readonly usernameField;
    private readonly passwordField;
    private readonly loginButton;
    private readonly errorText;

    //constructor for the login page
    constructor(page: Page){
        super(page);
        this.usernameField = page.getByLabel("Username:");
        this.passwordField = page.getByLabel("Password:");
        this.loginButton = page.locator("#ctl00_MainContent_login_button");
        this.errorText = page.locator("#ctl00_MainContent_status");
    }
    //Methods for the login page

    /** Navigates directly to the login page URL. */
    async navigateToLogin(){
        await this.navigate(GlobalData.loginUrl);
    }

    async fillUserName(username : string){
        await this.fill(this.usernameField, username);
    }

    async fillPassword(password : string){
        await this.fill(this.passwordField, password);
    }

    async clickLoginButton(){
        await this.click(this.loginButton);
    }

    /** Reads the login error banner text (e.g. after an invalid login attempt). */
    async readErrorMsg() : Promise<string | null>{
        return await this.getText(this.errorText);
    }

    /** Navigates to the login page and submits the given credentials. */
    async loginFeature(username : string, password : string){
        await this.navigateToLogin();
        await this.fillUserName(username);
        await this.fillPassword(password);
        await this.clickLoginButton();
    }
}