import { LoginPage } from '../Pages/LoginPage.js';
import { test } from '../base.ts';
   
// Набор валидных данных
const user_valid = [
    {login: 'aqa', password: 'AQA123'},
    {login: 'test', password: 'test123'},
    {login: 'admin', password: 'admin'},
    ]

user_valid.forEach(({login, password}) => {  
test(`Авторизация c валидными данными ${login} - ${password}`, async ({ loginPage, welcomePage }) => {
    await loginPage.openLoginPage();
    await loginPage.login(login, password);
    await welcomePage.isAuthorized()
    });
})
    // Набор НЕвалидных данных
const user_invalid = [
    {login: 'aqa', password: 'invalid_pass'},
    {login: 'invalid_login', password: 'test123'},
    {login: 'invalid_login', password: 'invalid_pass'},
    {login: 'aqa', password: ''},
    {login: '', password: 'test123'},
    {login: '', password: ''},
    ]

user_invalid.forEach(({login, password}) => {
test(`Авторизация c невалидными данными ${login} - ${password}`, async ({ loginPage }) => {
    await loginPage.openLoginPage();
    await loginPage.login(login, password);
    await loginPage.isUserNotFound()
    });
})