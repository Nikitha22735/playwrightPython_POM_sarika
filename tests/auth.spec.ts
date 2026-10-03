import { test } from '@playwright/test';
import { authPage } from '../pages/auth';
import { homePage } from '../pages/home';

test('starts Amazon sign-in with the configured email', async ({ page }) => {
  const loginEmail = "trainingplaywright@gmail.com"
  const loginPassword = "Welcome@04"
//   test.skip(!loginPassword, 'Set AMAZON_LOGIN_PASSWORD to run this sign-in test.');

  await page.goto('https://www.amazon.in/');
  const homePageObj = new homePage(page);
  const authPageObj = new authPage(page);

  await homePageObj.openSignIn();
  await authPageObj.enterEmail(loginEmail!);
  await authPageObj.continueToPassword();
  await authPageObj.enterPassword(loginPassword!);
  await authPageObj.submitSignIn();
  await authPageObj.validateSearchBoxIsVisible();
});

test('shows an error for an invalid Amazon password', async ({ page }) => {
  const loginEmail = 'trainingplaywright@gmail.com';
  const invalidPassword = 'InvalidPassword-For-Negative-Test-2026!';

  await page.goto('https://www.amazon.in/');
  const homePageObj = new homePage(page);
  const authPageObj = new authPage(page);

  await homePageObj.openSignIn();
  await authPageObj.enterEmail(loginEmail);
  await authPageObj.continueToPassword();
  await authPageObj.enterPassword(invalidPassword);
  await authPageObj.submitSignIn();
  await authPageObj.validateInvalidPasswordError();
});