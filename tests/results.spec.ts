import { test, expect } from '@playwright/test';
import { homePage } from '../pages/home';
import { resultsPage } from '../pages/results';

test('validate results screen ui @smoke', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  let homePageObj = new homePage(page)
  await homePageObj.enterSearchData("iphone")
  await homePageObj.clickOnSearchBtn()
  let resultsPageObj = new resultsPage(page)
 await resultsPageObj.validatingTheVisibilityOfEligibilityOfFreeDeliveryText()
 await resultsPageObj.validatingTheVisibilityOfResultsText()
});