const FormsPage = require('../pageobjects/forms.page');
const testData = require('../data/testData.json');
const { expect } = require('chai');

describe('Forms Functionality', () => {
    beforeEach(async () => {
        await FormsPage.navigateToForms();
    });

    it('TC05 - Should fill and submit form successfully', async () => {
        const formData = testData.forms.valid[0];
        
        await FormsPage.fillForm(
            formData.inputField,
            formData.switch,
            formData.dropdown
        );
        
        await FormsPage.clickActiveButton();
        
        const alertMessage = await FormsPage.getAlertMessage();
        expect(alertMessage).to.include(formData.expectedMessage);
        
        await FormsPage.takeScreenshot('form_filled');
    });

    it('TC06 - Should validate required fields', async () => {
        await FormsPage.clickActiveButton();
        
        const inputField = await FormsPage.inputField;
        const errorDisplayed = await inputField.getAttribute('error');
        expect(errorDisplayed).to.not.be.null;
        
        await FormsPage.takeScreenshot('form_validation_error');
    });
});