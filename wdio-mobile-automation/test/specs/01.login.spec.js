const LoginPage = require('../pageobjects/login.page');
const testData = require('../data/testData.json');
const { expect } = require('chai');

describe('Login Functionality', () => {
    beforeEach(async () => {
        await LoginPage.navigateToLogin();
    });

    it('TC01 - Should login with valid credentials', async () => {
        const validUser = testData.users.valid[0];
        await LoginPage.login(validUser.email, validUser.password);
        
        const isAlertDisplayed = await LoginPage.isDisplayed(LoginPage.successAlert);
        expect(isAlertDisplayed).to.be.true;
        
        await LoginPage.takeScreenshot('login_success');
        await LoginPage.dismissAlert();
    });

    it('TC02 - Should show error with invalid credentials', async () => {
        const invalidUser = testData.users.invalid[0];
        await LoginPage.login(invalidUser.email, invalidUser.password);
        
        const errorMessage = await LoginPage.getErrorMessage();
        expect(errorMessage).to.include(invalidUser.errorMessage);
        
        await LoginPage.takeScreenshot('login_error');
    });

    it('TC03 - Should register new user successfully', async () => {
        const newUser = testData.users.registration[0];
        await LoginPage.signUp(
            newUser.email,
            newUser.password,
            newUser.confirmPassword
        );
        
        const isAlertDisplayed = await LoginPage.isDisplayed(LoginPage.successAlert);
        expect(isAlertDisplayed).to.be.true;
        
        await LoginPage.takeScreenshot('signup_success');
        await LoginPage.dismissAlert();
    });
});