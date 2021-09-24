class Common {

    constructor() {
        this.cookieOverlay = {
            $okButton: $('[data-testid="cookiePolicyAgreement-close"]')
        }
    }

    async handleCookiePopup() {
        await this.cookieOverlay.$okButton.click();
    }
}

module.exports = Common