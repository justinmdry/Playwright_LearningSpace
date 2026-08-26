import {Locator, Page} from "@playwright/test";

/**
 * Base class for all Page Object Model (POM) classes.
 *
 * Wraps the common Playwright actions (click, fill, navigate, etc.) used across
 * pages so subclasses (LoginPage, HomePage, OrderPage) don't repeat boilerplate
 * and any framework-wide change (e.g. adding logging) only needs to happen here.
 */
export default class BasePage{
    protected readonly page: Page;

    constructor(page : Page){
        this.page = page;
    }

    /** Navigates the page to the given URL. */
    async navigate(url : string){
        await this.page.goto(url);
    }

    /** Waits for the given page load state (defaults to 'load'). */
    async waitForLoad(state : 'load' | 'domcontentloaded' | 'networkidle' = 'load'){
        await this.page.waitForLoadState(state);
    }

    /** Returns the page's current URL. */
    async currentUrl() : Promise<string>{
        return this.page.url();
    }

    async click(locator : Locator){
        await locator.click();
    }

    async fill(locator : Locator, value : string){
        await locator.fill(value);
    }

    async check(locator : Locator){
        await locator.check();
    }

    async selectOption(locator : Locator, value : string){
        await locator.selectOption(value);
    }

    async getText(locator : Locator) : Promise<string | null>{
        return await locator.textContent();
    }

    /** Returns how many elements match the given locator. */
    async count(locator : Locator) : Promise<number>{
        return await locator.count();
    }

}
