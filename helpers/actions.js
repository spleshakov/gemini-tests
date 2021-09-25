const {ExpectedConditions, browser} = require("protractor");

module.exports = {

    waitForElements(...$$elements) {
        let timeout = 30*1000; // ms
        let conditions = $$elements.map(
            $elem => ExpectedConditions.presenceOf($elem)
        )

        return browser.wait(
            ExpectedConditions.and(...conditions),
            timeout,
            'waitForElements failed'
        )
    },

    waitForOneOfElements(...$$elements) {
        let timeout = 30*1000; // ms
        let conditions = $$elements.map(
            $elem => ExpectedConditions.presenceOf($elem)
        )

        return browser.wait(
            ExpectedConditions.or(...conditions),
            timeout,
            'waitForOneOfElements failed'
        )
    },

    async scroll($element) {
        await browser.executeScript(
            'arguments[0].scrollIntoView({block: "center"})',
            $element.getWebElement()
        );
        // sleep to allow loading animation to complete
        await browser.sleep(500);
    },

}