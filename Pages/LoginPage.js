const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = this.page.locator('input#username');
        this.password = this.page.locator('input#password');
        this.submit = this.page.locator('button[type="submit"]');
        this.loginForm = this.page.locator('div.login-form');
        this.error = this.page.locator('div#message');
        this.incorrectPassword = this.page.locator('')
    }

    async openLoginPage() {
        await this.page.goto('/');
        await expect(this.page).toHaveTitle("Login Page");
    }
    
    async login(username, password) {
        await expect(this.loginForm).toBeVisible();
        await this.username.fill(username);
        await this.password.fill(password);
        await this.submit.click();
    }

    async isUserNotFound() {
        await expect.soft(this.error).toBeVisible();
        await expect.soft(this.error).toHaveText('User not found')
    }

    async isIncorrectPassword() {
        await expect.soft(this.error).toBeVisible();
        await expect.soft(this.error).toHaveText('Incorrect password')
    }
};