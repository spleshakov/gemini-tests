const {element, ExpectedConditions} = require("protractor");
const {waitForOneOfElements} = require('./../../helpers/actions');

class Dropdown {
    /**
     * Class to manipulate dropdowns
     * @param _labelCSS - CSS of wrapping label tag
     * @param {Boolean} nestedDiv - true if dropdown option has nexted divs, false if each option just div tag
     */
    constructor(_labelCSS, nestedDiv = false) {
        this.$container = $(_labelCSS + ' [class*="container"]:not([class*="value"]):not([style="display:none"]');
        this.$input = $(_labelCSS + ' input');

        // selectors are a bit different from dropdown to dropdown
        let _optionCSS = nestedDiv ? ' [id*="react-select"] div' : ' [id*="react-select"]'
        this.$$options = $$(_labelCSS + _optionCSS);
        this.$option = option => element(by.cssContainingText(_labelCSS + _optionCSS, option));
        this.$noItemsFound = element(by.cssContainingText('[class*="-no-options"]', 'No items found.'))
    }

    async type(option) {
        await this.$container.click();
        await browser.wait(
            async () => (await this.$$options.count()) > 0,
            1000,
            'No options populated after clicking dropdown'
        );
        await this.$input.sendKeys(option);
        await browser.sleep(500);
    }

    async select(option) {
        await this.type(option);
        await this.$option(option).click();
    }
}

module.exports = Dropdown