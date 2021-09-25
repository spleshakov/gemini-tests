class Common {

    constructor() {
        this.cookieOverlay = {
            $okButton: $('[data-testid="cookiePolicyAgreement-close"]')
        }
    }

    async handleCookiePopup() {
        if (await this.cookieOverlay.$okButton.isPresent())
            await this.cookieOverlay.$okButton.click();
    }
}

module.exports = Common