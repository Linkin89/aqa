import { test as base } from '@playwright/test';
import { LoginPage } from './Pages/LoginPage.js';
import { WelcomePage } from './Pages/WelcomePage.js';

type Fixtures = {
    loginPage: LoginPage,
    welcomePage: WelcomePage
}

export const test = base.extend<Fixtures>({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page))
    },
    welcomePage: async ({page}, use) => {
        await use(new WelcomePage(page))
    }
})