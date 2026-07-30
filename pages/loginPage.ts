import {Page} from "@playwright/test";
import { GlobalData } from "../data/GlobalData";

export default class LoginPage{

    private readonly page;
    private readonly usernameField;
    private readonly passwordField;
    private readonly loginButton;
    private readonly errorText; 

    //constructor for the login page 
    constructor(page: Page){
        this.page = page;
        this.usernameField = page.getByLabel("Username:");
        this.passwordField = page.getByLabel("Password:");
        this.loginButton = page.getByRole('button',{name : 'Login'});
        this.errorText = page.locator("#ctl00_MainContent_status");
    }
    //Methods for the login page 
    async navigate(){
        await this.page.goto("http://secure.smartbearsoftware.com/samples/TestComplete12/WebOrders/Login.aspx");
    }

    async fillUserName(username : string){
        await this.usernameField.fill(username);
    }

    async fillPassword(password : string){
        await this.passwordField.fill(password);
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }

    async readErrorMsg() : Promise<string | null>{
        return await this.errorText.textContent();
    }

    async loginFeature(username : string, password : string){
        await this.navigate();
        await this.fillUserName(username);
        await this.fillPassword(password);
        await this.clickLoginButton();
    }
}