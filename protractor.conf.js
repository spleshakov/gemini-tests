"use strict";

let {SpecReporter} = require('jasmine-spec-reporter')

/**
 *  Config
 */
let protractorConfig = {

	directConnect: true,

	specs: ["specs/happy-path.spec.js"],

	capabilities: {
		"browserName": "chrome",
		"chromeOptions": {
			"args": ["incognito", "--window-size=1920,1080", "disable-extensions", "start-maximized", "--test-type=browser"],
			"prefs": {}
		}
	},

	//Set timeout for all scripts
	allScriptsTimeout: 300000,

	//set Protractor timeout
	getPageTimeout: 300000,

	// testing framework, jasmine is the default
	framework: "jasmine",

	// Options to be passed to Jasmine.
	jasmineNodeOpts: {

		// onComplete will be called just before the driver quits.
		onComplete: null,

		// If true, display spec names.
		isVerbose: true,

		// If true, print colors to the terminal.
		showColors: true,

		// If true, include stack traces in failures.
		includeStackTrace: true,

		// Default time to wait in ms before a test fails.
		defaultTimeoutInterval: 500 * 1000, // 500 sec

		print() {
		}
	},

	beforeLaunch() {},

	async onPrepare() {
		jasmine.getEnv().addReporter(
			new SpecReporter({
				spec: {
					displayStacktrace: true,
				},
			})
		)
		await browser.driver.manage().window().setSize(1920, 1080);
		await browser.driver.manage().window().maximize();
		await browser.waitForAngularEnabled(false);
	},

	onComplete() {},

	afterLaunch(exitCode) {}
};

process.on("unhandledRejection", ({message}) => {
	console.log("\x1b[36m%s\x1b[0m", `Unhandled rejection: ${message}`);
});


exports.config = protractorConfig;
