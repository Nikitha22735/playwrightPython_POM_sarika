import { expect, Locator, Page } from "playwright/test";

export class resultsPage{

    resultsText:Locator
    freeDeliveryText: Locator
    constructor(page: Page){
       this.resultsText =page.getByRole('heading', { name: 'Results', exact: true })
       this.freeDeliveryText = page.getByText('Eligible for Free Delivery')
    }

    async validatingTheVisibilityOfResultsText(){
        await expect(this.resultsText).toBeVisible();
    }

    async validatingTheVisibilityOfEligibilityOfFreeDeliveryText(){
         await expect( this.freeDeliveryText).toBeVisible();
    }

    
    

}