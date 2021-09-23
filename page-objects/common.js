const {ExpectedConditions, browser} = require("protractor");

class Common {

    constructor() {
    }

    async waitForElements(...$$elements) {
        let timeout = 30*1000; // ms
        let conditions = $$elements.map(
            $elem => ExpectedConditions.presenceOf($elem)
        )

        return browser.wait(
            ExpectedConditions.and(...conditions),
            timeout,
            'waitForElements failed'
        )
    }

}

module.exports = Common