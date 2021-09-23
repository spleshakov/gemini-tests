const Common = require('./common')
const {browser} = require("protractor");
const createNewAccount = new (require('./create-new-account'))()

class Login extends Common {
    constructor() {
        super();
        this.$title = $('[data-testid="title"]');
        this.$createNewAccount = $('[data-testid="goToRegister"]');
    }

    async goToHomePage() {
        await browser.get('/');
        await this.waitForElements(
            this.$title,
            this.$createNewAccount
        )
    }

    async createNewAccount() {
        await this.$createNewAccount.click();
        await this.waitForElements(
            createNewAccount.$createBusinessAccount
        )
    }
}

module.exports = Login