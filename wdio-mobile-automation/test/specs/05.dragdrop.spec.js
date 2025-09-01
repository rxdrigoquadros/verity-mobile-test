const BasePage = require('../pageobjects/base.page');
const testData = require('../data/testData.json');
const { expect } = require('chai');

describe('Drag and Drop Functionality', () => {
    it('TC08 - Should perform drag and drop', async () => {
        const dragTab = await $('~Drag');
        await dragTab.click();
        
        for (const element of testData.dragAndDrop.elements) {
            const source = await $(`~${element.source}`);
            const target = await $(`~${element.target}`);
            
            await driver.performActions([{
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, origin: source },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 1000 },
                    { type: 'pointerMove', duration: 1000, origin: target },
                    { type: 'pointerUp', button: 0 }
                ]
            }]);
            
            await driver.pause(500);
        }
        
        await BasePage.prototype.takeScreenshot('drag_drop_complete');
        
        const successMessage = await $('~You made it');
        const isDisplayed = await successMessage.isDisplayed();
        expect(isDisplayed).to.be.true;
    });
});