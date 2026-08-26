import {Page} from "@playwright/test";
import BasePage from "./basePage";

/**
 * Page object for the WebOrders home/orders grid page (Default.aspx).
 * Handles selecting and deleting orders from the grid, reading grid row values,
 * logging out, and navigating to the "make an order" page.
 */
export default class HomePage extends BasePage{
    private readonly firstCheckBox;
    private readonly deleteButton;
    private readonly checkboxes;
    private readonly logoutButton;
    private readonly firstNameCheck;
    private readonly lastNameCheck;

    private readonly orderLink;


    constructor(page : Page){
        super(page);
        this.firstCheckBox = page.locator("#ctl00_MainContent_orderGrid_ctl02_OrderSelector");
        this.deleteButton = page.locator("#ctl00_MainContent_btnDelete");
        this.checkboxes = page.locator("input[id*=ctl00_MainContent_orderGrid]");
        this.firstNameCheck = page.locator("#ctl00_MainContent_orderGrid > tbody > tr:nth-child(2) > td:nth-child(2)");
        this.lastNameCheck = page.locator("#ctl00_MainContent_orderGrid > tbody > tr");
        this.logoutButton = page.locator('#ctl00_logout');

        this.orderLink = page.locator('#ctl00_menu > li:nth-child(3) > a');
    }

    /** Checks the checkbox on the first row of the order grid. */
    async checkFirstCB(){
        await this.check(this.firstCheckBox);
    }

    /** Checks the checkbox on the last row of the order grid. */
    async checkLastCb(){
        await this.check(this.checkboxes.last());
    }

    async clickDeleteButton(){
        await this.click(this.deleteButton);
    }

    /** Returns how many order-grid checkboxes are currently present. */
    async countCheckBoxes() : Promise<number | null>{
        return await this.count(this.checkboxes);
    }

    /** Selects the first order row and deletes it. */
    async completeFirstDeleteTest(){
        await this.checkFirstCB();
        await this.clickDeleteButton();
    }

    /** Selects the last order row and deletes it. */
    async completeLastDeleteTest(){
        await this.checkLastCb();
        await this.clickDeleteButton();
    }

    async logoutFromHomePage(){
        await this.click(this.logoutButton);
    }

    /** Reads the customer name from the first row of the order grid. */
    async firstNameChecker(){
        return await this.getText(this.firstNameCheck.first());
    }

    /** Reads the customer name (2nd column) from the last row of the order grid. */
    async lastNameChecker(){
        return await this.getText(this.lastNameCheck.last().locator("td").nth(1));
    }

    /** Navigates to the "make an order" page via the nav menu link. */
    async clickToMakeOrder(){
        await this.click(this.orderLink);
    }

}