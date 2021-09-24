const Common = require('./common');
const {browser} = require("protractor");
const Dropdown = require('./components/dropdown');
const {scroll, waitForElements} = require('./../helpers/actions');
const thanksForRegistering = new (require('./thanks-for-registering'))()

class InstitutionalClientRegistration extends Common {
    constructor() {
        super();
        this.$header = $('.FormHeader h3');

        this.$legalBusinessName = $('[name="company.legalName"]');
        this.companyTypeDropdown = new Dropdown('[data-testid="companyTypeDropdown-label"]', true)
        this.countryOfBusinessDropdown = new Dropdown('[data-testid="countryDropdown-label"]')
        this.stateDropdown = new Dropdown('[data-testid="stateDropdown-label"]')
        this.$legalFirstName = $('[name="personal.legalName.firstName"]');
        this.$middleName = $('[name="personal.legalName.middleName"]');
        this.$legalLastName = $('[name="personal.legalName.lastName"]');
        this.$yourEmailAddress = $('[name="personal.email"]');
        this.$continueButton = $('[data-testid="InstitutionSubmit"]');
    }

    async setBusinessName(value) {
        await this.$legalBusinessName.sendKeys(value);
    }

    async setCompanyType(value) {
        await this.companyTypeDropdown.select(value);
    }

    async setCountry(value) {
        await this.countryOfBusinessDropdown.select(value);
    }

    async setState(value) {
        await this.stateDropdown.select(value);
    }

    async setFirstName(value) {
        await this.$legalFirstName.sendKeys(value);
    }

    async setMiddleName(value) {
        await this.$middleName.sendKeys(value);
    }

    async setLastName(value) {
        await this.$legalLastName.sendKeys(value);
    }

    async setEmail(value) {
        await this.$yourEmailAddress.sendKeys(value);
    }

    async continue() {
        await scroll(this.$continueButton);
        await this.$continueButton.click();
        await waitForElements(thanksForRegistering.$header);
    }
}

module.exports = InstitutionalClientRegistration