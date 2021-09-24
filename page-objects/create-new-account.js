const Common = require('./common');
const institutionalClientRegistration = new (require('./institutional-client-registration'))();
const {waitForElements} = require('./../helpers/actions');

class CreateNewAccount extends Common {
    constructor() {
        super();
        this.$header = $('[data-testid="title"]');
        this.$createBusinessAccount = $('[data-testid="register-go-to-institution-register"]');
    }

    async createBusinessAccount() {
        await this.$createBusinessAccount.click();
        await waitForElements(
            institutionalClientRegistration.$header
        )
    }
}

module.exports = CreateNewAccount