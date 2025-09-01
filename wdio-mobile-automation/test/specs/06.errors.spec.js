const LoginPage = require('../pageobjects/login.page');
const testData = require('../data/testData.json');
const { expect } = require('chai');

describe('Error Messages Validation', () => {
    it('TC09 - Should display appropriate error messages', async () => {
        await LoginPage.navigateToLogin();
        
        for (const invalidUser of testData.users.invalid) {
            await LoginPage.login(invalidUser.email, invalidUser.password);
            
            const errorMessage = await LoginPage.getErrorMessage();
            expect(errorMessage).to.include(invalidUser.errorMessage);
            
            await LoginPage.takeScreenshot(`error_${invalidUser.errorMessage.replace(/\s/g, '_')}`);
            
            // Clear fields for next iteration
            await LoginPage.emailInput.clearValue();
            await LoginPage.passwordInput.clearValue();
        }
    });
});