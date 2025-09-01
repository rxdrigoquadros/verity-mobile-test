const BasePage = require('../pageobjects/base.page');
const { expect } = require('chai');

describe('Navigation Tests', () => {
    it('TC04 - Should navigate between tabs', async () => {
        const tabs = ['Home', 'Webview', 'Login', 'Forms', 'Swipe', 'Drag'];
        
        for (const tab of tabs) {
            const tabElement = await $(`~${tab}`);
            await tabElement.click();
            await driver.pause(1000);
            
            const isSelected = await tabElement.getAttribute('selected');
            expect(isSelected).to.equal('true');
            
            await BasePage.prototype.takeScreenshot(`navigation_${tab.toLowerCase()}`);
        }
    });
});