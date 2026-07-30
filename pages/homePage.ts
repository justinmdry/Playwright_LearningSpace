import {Page} from "@playwright/test";
import { GlobalData } from "../data/GlobalData";

export default class HomePage{
    private readonly page;
    private readonly firstCheckBox;
    private readonly deleteButton;
    private readonly checkboxes;


    constructor(page : Page){
        this.page = page;
        this.firstCheckBox = page.locator("#ctl00_MainContent_orderGrid_ctl02_OrderSelector");
        this.deleteButton = page.locator("#ctl00_MainContent_btnDelete");
        this.checkboxes = page.locator("input[id*=ctl00_MainContent_orderGrid]");
    }

    async checkFirstCB(){
        await this.firstCheckBox.check();
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

}