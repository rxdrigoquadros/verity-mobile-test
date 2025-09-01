const BasePage = require('./base.page');

class FormsPage extends BasePage {
    get formsTab() { return $('~Forms'); }
    get inputField() { return $('~text-input'); }
    get inputFieldResult() { return $('~input-text-result'); }
    get switchElement() { return $('~switch'); }
    get switchText() { return $('~switch-text'); }
    get dropdown() { return $('~Dropdown'); }
    get activeButton() { return $('~button-Active'); }
    get inactiveButton() { return $('~button-Inactive'); }
    get alertMessage() { return $('//android.widget.TextView[@resource-id="android:id/message"]'); }

    async navigateToForms() {
        await this.click(this.formsTab);
    }

    async fillForm(text, toggleSwitch = false, dropdownOption = null) {
        await this.setValue(this.inputField, text);
        
        if (toggleSwitch) {
            await this.click(this.switchElement);
        }
        
        if (dropdownOption) {
            await this.selectDropdownOption(dropdownOption);
        }
    }

    async selectDropdownOption(option) {
        await this.click(this.dropdown);
        const optionElement = await $(`//android.widget.CheckedTextView[@text="${option}"]`);
        await this.click(optionElement);
    }

    async clickActiveButton() {
        await this.click(this.activeButton);
    }

    async getAlertMessage() {
        await this.waitForElement(this.alertMessage);
        return await this.getText(this.alertMessage);
    }
}

module.exports = new FormsPage();