import {Page} from "@playwright/test";
import { GlobalData } from "../data/GlobalData";

export default class HomePage{
    private readonly page;
    private readonly firstCheckBox;
    private readonly deleteButton;
    private readonly checkboxes;
    private readonly logoutButton;
    private readonly firstNameCheck;
    private readonly lastNameCheck;

    private readonly orderLink;


    constructor(page : Page){
        this.page = page;
        this.firstCheckBox = page.locator("#ctl00_MainContent_orderGrid_ctl02_OrderSelector");
        this.deleteButton = page.locator("#ctl00_MainContent_btnDelete");
        this.checkboxes = page.locator("input[id*=ctl00_MainContent_orderGrid]");
        this.firstNameCheck = page.locator("#ctl00_MainContent_orderGrid > tbody > tr:nth-child(2) > td:nth-child(2)");
        this.lastNameCheck = page.locator("#ctl00_MainContent_orderGrid > tbody > tr");
        this.logoutButton = page.locator('#ctl00_logout');

        this.orderLink = page.locator('#ctl00_menu > li:nth-child(3) > a');
    }

    async checkFirstCB(){
        await this.firstCheckBox.check();
    }

    async checkLastCb(){
        await this.checkboxes.last().check();
    }

    async clickDeleteButton(){
        await this.deleteButton.click();
    }

    async countCheckBoxes() : Promise<number | null>{
        return await this.checkboxes.count();
    }

    async completeFirstDeleteTest(){
        await this.checkFirstCB();
        await this.clickDeleteButton();
    }

    async completeLastDeleteTest(){
        await this.checkLastCb();
        await this.clickDeleteButton();
    }

    async logoutFromHomePage(){
        await this.logoutButton.click();
    }

    async firstNameChecker(){
        return await this.firstNameCheck.first().textContent();
    }

    async lastNameChecker(){
        return await this.lastNameCheck.last().locator("td").nth(1).textContent();
    }

    async clickToMakeOrder(){
        await this.orderLink.click()
    }

}