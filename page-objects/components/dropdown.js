const {element, ExpectedConditions} = require("protractor");


class Dropdown {
    constructor(_labelCSS, nextedDiv = false) {
        this.$container = $(_labelCSS + ' [class*="container"]:not([class*="value"]):not([style="display:none"]');
        this.$input = $(_labelCSS + ' input');

        // selectors are a bit different from dropdown to dropdown
        let _optionCSS = nextedDiv ? ' [id*="react-select"] div' : ' [id*="react-select"]'
        this.$$options = $$(_labelCSS + _optionCSS);
        this.$option = option => element(by.cssContainingText(_labelCSS + _optionCSS, option))
    }

    async select(option) {
        await this.$container.click();
        await browser.wait(
            ExpectedConditions.presenceOf(this.$option(option)),
            1000,
            'No options populated after clicking dropdown'
        );
        await this.$input.sendKeys(option);
        await browser.sleep(500);
        await this.$option(option).click();
    }
}

module.exports = Dropdown