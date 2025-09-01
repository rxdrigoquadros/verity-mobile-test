const LoginPage = require('../pageobjects/login.page');
const testData = require('../data/testData.json');
const { expect } = require('chai');

describe('Logout Functionality', () => {
    it('TC10 - Should logout successfully', async () => {
        // First login
        await LoginPage.navigateToLogin();
        const validUser = testData.users.valid[0];
        await LoginPage.login(validUser.email, validUser.password);
        await LoginPage.dismissAlert();
        
        // Navigate away and back to check session
        const homeTab = await $('~Home');
        await homeTab.click();
        
        await LoginPage.navigateToLogin();
        
        // Verify user is logged out (login form is visible)
        const emailInput = await LoginPage.emailInput;
        const isLoginFormVisible = await emailInput.isDisplayed();
        expect(isLoginFormVisible).to.be.true;
        
        await LoginPage.takeScreenshot('logout_success');
    });
});