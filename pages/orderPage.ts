import {Page} from "@playwright/test";
import { GlobalData } from "../data/GlobalData";
import BasePage from "./basePage";

/**
 * Page object for the WebOrders "create an order" page (Process.aspx).
 * Provides individual field actions plus a combined `completeOrder` helper
 * that fills out and submits an order using the values in GlobalData.
 */
export default class OrderPage extends BasePage{

    private readonly productSelector;
    private readonly quant;
    private readonly customerName;
    private readonly streetName;
    private readonly cityName;
    private readonly stateName;
    private readonly zipLoc;

    private readonly cardSelector;
    private readonly cardNumber;
    private readonly expiredate;

    private readonly processButton;

    private readonly viewAllOrdersLink;

    


    constructor(page : Page){
        super(page);

        this.productSelector = this.page.getByLabel("Product:");
        this.quant = this.page.getByLabel("Quantity:");
        this.customerName = this.page.getByLabel("Customer name:");
        this.streetName = this.page.getByLabel("Street:");
        this.cityName = this.page.getByLabel("City:");
        this.stateName = this.page.getByLabel("State:");
        this.zipLoc = this.page.getByLabel("Zip:");

        this.cardSelector = this.page.locator("#ctl00_MainContent_fmwOrder_cardList_1");
        this.cardNumber = this.page.getByLabel("Card Nr:");
        this.expiredate = this.page.getByLabel("Expire Date (mm/yy):");

        this.processButton = this.page.locator("#ctl00_MainContent_fmwOrder_InsertButton");
        this.viewAllOrdersLink = this.page.locator("#ctl00_menu > li:nth-child(1) > a")
    }

    async selectProduct(product : string){
        await this.selectOption(this.productSelector, product);
    }

    async fillQuantity(quantity : string){
        await this.fill(this.quant, quantity);
    }

    async fillCustomerName(name : string){
        await this.fill(this.customerName, name);
    }

    async fillStreetName(name: string){
        await this.fill(this.streetName, name);
    }

    async fillCityName(name: string){
        await this.fill(this.cityName, name);
    }

    async fillStateName(name:string){
        await this.fill(this.stateName, name);
    }

    async fillZip(zip:string){
        await this.fill(this.zipLoc, zip);
    }

    async selectCard(){
        await this.check(this.cardSelector);
    }

    async fillCardNumber(number: string){
        await this.fill(this.cardNumber, number);
    }

    async fillExpireDate(date : string){
        await this.fill(this.expiredate, date);
    }

    /** Fills out the entire order form using GlobalData values and submits it. */
    async completeOrder(){
        //Fill in informaiton
        await this.selectProduct(GlobalData.product);
        await this.fillQuantity(GlobalData.quantity);
        await this.fillCustomerName(GlobalData.addrInfo);
        await this.fillStreetName(GlobalData.addrInfo);
        await this.fillCityName(GlobalData.addrInfo);
        await this.fillStateName(GlobalData.addrInfo);
        await this.fillZip(GlobalData.zip);

        await this.selectCard();
        await this.fillCardNumber(GlobalData.cardNumber);
        await this.fillExpireDate(GlobalData.exprDate);

        //Click to complete order
        await this.processButton.click();
    }

    /** Navigates to the "view all orders" page via the nav menu link. */
    async clickToViewAllOrders(){
        await this.click(this.viewAllOrdersLink);
    }

}