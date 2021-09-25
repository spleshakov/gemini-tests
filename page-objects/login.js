const Common = require('./common');
const {browser} = require("protractor");
const createNewAccount = new (require('./create-new-account'))();
const {waitForElements} = require('./../helpers/actions');

class Login extends Common {
    constructor() {
        super();
        this.$title = $('[data-testid="title"]');
        this.$createNewAccount = $('[data-testid="goToRegister"]');
    }

    async goToHomePage() {
        await browser.get('/');
        await waitForElements(
            this.$title,
            this.$createNewAccount
        )
    }

    async createNewAccount() {
        await this.$createNewAccount.click();
        await waitForElements(
            createNewAccount.$createBusinessAccount,
            createNewAccount.$header
        )
    }
}

module.exports = Login