const BasePage = require('./base.page');

class LoginPage extends BasePage {
    get loginTab() { return $('~Login'); }
    get signUpTab() { return $('~Sign up'); }
    get emailInput() { return $('~input-email'); }
    get passwordInput() { return $('~input-password'); }
    get confirmPasswordInput() { return $('~input-repeat-password'); }
    get loginButton() { return $('~button-LOGIN'); }
    get signUpButton() { return $('~button-SIGN UP'); }
    get errorMessage() { return $('android=new UiSelector().textContains("error")'); }
    get successAlert() { return $('//android.widget.TextView[contains(@text, "Success")]'); }
    get alertOkButton() { return $('//android.widget.Button[@text="OK"]'); }

    async navigateToLogin() {
        await this.click(this.loginTab);
    }

    async login(email, password) {
        await this.setValue(this.emailInput, email);
        await this.setValue(this.passwordInput, password);
        await this.click(this.loginButton);
    }

    async signUp(email, password, confirmPassword) {
        await this.click(this.signUpTab);
        await this.setValue(this.emailInput, email);
        await this.setValue(this.passwordInput, password);
        await this.setValue(this.confirmPasswordInput, confirmPassword);
        await this.click(this.signUpButton);
    }

    async getErrorMessage() {
        return await this.getText(this.errorMessage);
    }

    async dismissAlert() {
        if (await this.isDisplayed(this.alertOkButton)) {
            await this.click(this.alertOkButton);
        }
    }
}

module.exports = new LoginPage();