const BasePage = require('../pageobjects/base.page');
const testData = require('../data/testData.json');
const { expect } = require('chai');

describe('Swipe Functionality', () => {
    it('TC07 - Should swipe through cards', async () => {
        const swipeTab = await $('~Swipe');
        await swipeTab.click();
        
        for (const card of testData.swipeCards) {
            const cardTitle = await $(`//android.widget.TextView[@text="${card.title}"]`);
            
            if (await cardTitle.isDisplayed()) {
                const titleText = await cardTitle.getText();
                expect(titleText).to.equal(card.title);
                await BasePage.prototype.takeScreenshot(`swipe_card_${card.title.replace(/\s/g, '_')}`);
            }
            
            await BasePage.prototype.swipeUp();
            await driver.pause(1000);
        }
    });
});