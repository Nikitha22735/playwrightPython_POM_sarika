import { expect, Locator, Page } from "playwright/test";

export class homePage{

    accountLink: Locator
    searchTextBox: Locator  // defining the type of the locator
    searchBtn: Locator
    constructor(page: Page){
        this.accountLink = page.getByRole('link', { name: 'Hello, sign in Account & Lists' })
        this.searchTextBox = page.getByRole('searchbox', { name: 'Search Amazon.in' })
        this.searchBtn = page.getByRole('button', { name: 'Go', exact: true })
    }

    async openSignIn() {
        await this.accountLink.click();
    }

    async validateTheVisibilityOfSearchTextBox(){
         await expect(this.searchTextBox).toBeVisible();
    }

    async enterSearchData(product:string){
        await this.searchTextBox.fill(product);
    }

    async clickOnSearchBtn(){
        await  this.searchBtn.click();
    }
    

}