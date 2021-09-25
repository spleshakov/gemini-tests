'use strict';
// require classes
let LoginPage = require('./../page-objects/login');
let CreateNewAccount = require('./../page-objects/create-new-account');
let InstitutionalClientRegistration = require('./../page-objects/institutional-client-registration');
let ThanksForRegistering = require('./../page-objects/thanks-for-registering');
// instantiate Page Object classes
let loginPage = new LoginPage();
let createNewAccount = new CreateNewAccount();
let clientRegistration = new InstitutionalClientRegistration();
let thanksForRegistering = new ThanksForRegistering();
// prepare other variables
let data = require('./../test-data/happy-path.json');
let {getRandomString} = require('./../helpers/functions')

describe('Suite: business account registration - happy path scenario', () => {

    it('Open app and go to account creation page', async () => {
        await loginPage.goToHomePage();
        await loginPage.createNewAccount();

        expect(await createNewAccount.$header.getText())
            .toBe('Create an account');
    });

    it('Go to the "Institutional Client Registration" page', async () => {

        await createNewAccount.handleCookiePopup();
        await createNewAccount.createBusinessAccount();

        expect(await clientRegistration.$header.getText())
            .toBe('Institutional Client Registration');
    });

    it('Fill out and submit the form', async () => {
        await clientRegistration.setBusinessName(data.companyInformation.name + getRandomString(5));
        await clientRegistration.setCompanyType(data.companyInformation.type);
        await clientRegistration.setCountry(data.companyLocation.country);
        await clientRegistration.setState(data.companyLocation.state);
        await clientRegistration.setFirstName(data.personalInformation.firstName);
        await clientRegistration.setMiddleName(data.personalInformation.middleName);
        await clientRegistration.setLastName(data.personalInformation.lastName);
        await clientRegistration.setEmail(data.personalInformation.email);

        await clientRegistration.continue();

        expect(await thanksForRegistering.$header.getText())
            .toBe('Thanks for Registering!');
    });
});
