const Common = require('./common')
const {browser} = require("protractor");

class CreateNewAccount extends Common {
    constructor() {
        super();
        this.$createBusinessAccount = $('[data-testid="register-go-to-institution-register"]');
    }

    async createBusinessAccount() {
        await this.$createBusinessAccount.click();
        await this.waitForElements(
            sdff
        )
    }
}

module.exports = CreateNewAccount