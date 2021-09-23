const Common = require('./common')
const {browser} = require("protractor");
const Dropdown = require('./components/dropdown')

class InstitutionalClientRegistration extends Common {
    constructor() {
        super();
        this.$legalBusinessName = $('[name="company.legalName"]');
        this.companyTypeDropdown = new Dropdown('[data-testid="companyTypeDropdown-label"]')
        this.countryOfBusinessDropdown = new Dropdown('[data-testid="countryDropdown-label"]')
        this.stateDropdown = new Dropdown('[data-testid="stateDropdown-label"]')
        this.$legalFirstName = $('[name="personal.legalName.firstName"]');
        this.$middleName = $('[name="personal.legalName.middleName"]');
        this.$legalLastName = $('[name="personal.legalName.lastName"]');
        this.$yourEmailAddress = $('[name="personal.email"]');
        this.$continueButton = $('[data-testid="InstitutionSubmit"]');
    }

    async createBusinessAccount() {

    }
}

module.exports = InstitutionalClientRegistration