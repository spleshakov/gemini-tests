"use strict";

describe("Suite: Example", () => {
    it("it", async () => {
        await browser.get('https://exchange.sandbox.gemini.com/')
        await browser.sleep(3000)
        expect(await $('[data-testid="title"]').getText()).toBe('Gemini sandbox')
    });
});
