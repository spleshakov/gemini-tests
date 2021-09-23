const {element, ExpectedConditions} = require("protractor");

class Dropdown {
    constructor(_labelCSS) {
        this.$container = $(_labelCSS + ' [class*="container"]:not([class*="value"]):not([style="display:none"]');
        this.$input = $(_labelCSS + ' input');
        this.$$options = $$(_labelCSS + ' [class*="option"] div');
        this.$option = option => element(by.cssContainingText(_labelCSS + ' [class*="option"] div', option))
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