import {Page} from "@playwright/test";
import { GlobalData } from "../data/GlobalData";

export default class OrderPage{
    private readonly page;

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
        this.page = page;
        
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
        await this.productSelector.selectOption(product);
    }

    async fillQuantity(quantity : string){
        await this.quant.fill(quantity);
    }

    async fillCustomerName(name : string){
        await this.customerName.fill(name);
    }

    async fillStreetName(name: string){
        await this.streetName.fill(name);
    }

    async fillCityName(name: string){
        await this.cityName.fill(name);
    }

    async fillStateName(name:string){
        await this.stateName.fill(name);
    }

    async fillZip(zip:string){
        await this.zipLoc.fill(zip);
    }

    async selectCard(){
        await this.cardSelector.check();
    }

    async fillCardNumber(number: string){
        await this.cardNumber.fill(number);
    }

    async fillExpireDate(date : string){
        await this.expiredate.fill(date);
    }

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

    async clickToViewAllOrders(){
        await this.viewAllOrdersLink.click();
    }

}