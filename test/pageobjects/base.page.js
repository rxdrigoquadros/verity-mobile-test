class BasePage {
    async waitForElement(element, timeout = 10000) {
        await element.waitForDisplayed({ timeout });
        return element;
    }

    async click(element) {
        await this.waitForElement(element);
        await element.click();
    }

    async setValue(element, value) {
        await this.waitForElement(element);
        await element.setValue(value);
    }

    async getText(element) {
        await this.waitForElement(element);
        return await element.getText();
    }

    async isDisplayed(element) {
        try {
            await this.waitForElement(element, 5000);
            return await element.isDisplayed();
        } catch {
            return false;
        }
    }

    async swipeUp(percentage = 0.5) {
        const { width, height } = await driver.getWindowSize();
        const startY = height * 0.8;
        const endY = height * 0.2;
        const x = width * percentage;

        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pointerMove', duration: 1000, x, y: endY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
    }

    async takeScreenshot(name) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        await driver.saveScreenshot(`./screenshots/${name}_${timestamp}.png`);
    }
}

module.exports = BasePage;