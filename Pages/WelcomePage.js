const { expect } = require('@playwright/test')

exports.WelcomePage =
    class WelcomePage {
        constructor(page) {
            this.page = page
            this.welcomeMessage = this.page.locator('div.welcome-message')
            this.logout = this.page.locator('#logoutButton')
        }

        async isAuthorized() {
            await expect(this.welcomeMessage).toBeVisible()
            await expect(this.welcomeMessage).toHaveText('Вы авторизовались')
            await expect(this.logout).toBeVisible();
            await expect(this.logout).toContainText('Logout');
            await expect(this.logout).toBeEnabled();
        }
        
        async logout() {
            await expect(this.logout).toBeVisible();
            await expect(this.logout).toContainText('Logout');
            await expect(this.logout).toBeEnabled();
            await this.page.click(this.logout)
        }
}