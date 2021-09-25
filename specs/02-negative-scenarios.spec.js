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
let data = require('../test-data/happy-path.json');
let {getRandomString} = require('./../helpers/functions')

describe('Suite: business account registration form - negative scenarios', () => {

    beforeAll(async () => {
        await loginPage.goToHomePage();
        await loginPage.createNewAccount();
        await createNewAccount.createBusinessAccount();
    })

    it('Required fields validation', async () => {
        await clientRegistration.continue();

        for (let error of [
            'Legal Business Name is required.',
            'Company type is required.',
            'First name is required.',
            'Last name is required.',
            'Please enter a valid email address.',
            'Company state is required.'
        ]) {
            expect(
                await clientRegistration.errorOverlay.$item(error).isPresent()
            ).toBe(
                true,
                `Expect '${error}' error to be present`
            );
        }
    });

    it('Required fields are highlighted', async () => {

        for (let $field of [
            clientRegistration.$legalBusinessName,
            clientRegistration.$legalFirstName,
            clientRegistration.$legalLastName,
            clientRegistration.$yourEmailAddress
        ]) {
            expect(
                await $field.getAttribute('class')
            ).toContain(
                'css-1a9sz2',
                `Expect '${$field.locator().toString()}' field to be red`
            );
        }
    });

    it('Non existing dropdown option', async () => {
        await clientRegistration.companyTypeDropdown.type('non-existing-option');

        expect(
            await clientRegistration.companyTypeDropdown.$noItemsFound.isPresent()
        ).toBe(
            true,
            `Expect 'No items found.' message to be present`
        );
    });

    it('Email format validation', async () => {
        await clientRegistration.setBusinessName(data.companyInformation.name + getRandomString(5));
        await clientRegistration.setCompanyType(data.companyInformation.type);
        await clientRegistration.setCountry(data.companyLocation.country);
        await clientRegistration.setState(data.companyLocation.state);
        await clientRegistration.setFirstName(data.personalInformation.firstName);
        await clientRegistration.setMiddleName(data.personalInformation.middleName);
        await clientRegistration.setLastName(data.personalInformation.lastName);

        await clientRegistration.setEmail('dfgf');
        await clientRegistration.continue();

        expect(
            await clientRegistration.errorOverlay.$emailError.getText()
        ).toBe(
            'Please specify a valid email domain.',
            `Expect error text to be 'Please specify a valid email domain.'`
        );
    });
});
