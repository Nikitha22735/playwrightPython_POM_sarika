import { expect, Locator, Page } from "playwright/test";

export class authPage {
    emailTextBox: Locator
    passwordTextBox: Locator
    continueButton: Locator
    signInButton: Locator
    searchTextBox: Locator
    invalidPasswordError: Locator

    constructor(page: Page) {
        this.emailTextBox = page.getByRole('textbox', { name: 'Enter mobile number or email' })
        this.passwordTextBox = page.getByRole('textbox', { name: 'Password' })
        this.continueButton = page.getByRole('button', { name: 'Continue' })
        this.signInButton = page.getByRole('button', { name: 'Sign in' })
        this.searchTextBox = page.getByRole('searchbox', { name: 'Search Amazon.in' })
        this.invalidPasswordError = page.getByRole('alert').getByText('Your password is incorrect', { exact: true })
    }

    async enterEmail(email: string) {
        await this.emailTextBox.fill(email);
    }

    async enterPassword(password: string) {
        await this.passwordTextBox.fill(password);
    }

    async continueToPassword() {
        await this.continueButton.click();
    }

    async submitSignIn() {
        await this.signInButton.click();
    }

    async validateInvalidPasswordError() {
        await expect(this.invalidPasswordError).toBeVisible();
    }

    async validateSearchBoxIsVisible() {
        await expect(this.searchTextBox).toBeVisible();
    }
}