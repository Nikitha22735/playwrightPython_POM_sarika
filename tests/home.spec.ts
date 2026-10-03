import { test, expect } from '@playwright/test';
import { homePage } from '../pages/home';


test('valida teh homescreen elements @smoke', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await expect(page.getByRole('link', { name: 'Amazon.in' })).toBeVisible();
  await expect(page.locator('#nav-link-accountList')).toContainText('Account & Lists');
   let homePageObj = new homePage(page)
   await homePageObj.validateTheVisibilityOfSearchTextBox()
});