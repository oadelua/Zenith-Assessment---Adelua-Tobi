import { web } from "../fixtures/selectors.js";

describe('Automated Test for Zenith Bank', () => {
    beforeEach(() => {
        // Navigate to the Zenith Bank website
        cy.visit('/');
        cy.get(web.continueBtn).click();
        // Click on web header
        cy.get(web.header).click();
        // Select "Personal" menu item
        cy.get(web.personalBtn)
            .should('be.visible')
            .click();
    });

    it('should navigate to Current Accounts page', () => {
        // Select the "Bank Accounts" option from the submenu
        cy.get(web.bankAccounts)
            .should('be.visible')
            .click();
        // Click on the "Current Account" submenu
        cy.get(web.currentAccount).click();
        // Validate features of Individual Current Account
        validateFeaturesofRequirements();
    });
});

function validateFeaturesofRequirements() {
    // Click on "FEATURES AND BENEFITS" to reveal its sub-elements
    cy.contains('FEATURES AND BENEFITS')
        .should('be.visible')
        .click();
    // Validate the visibility of each sub-feature under "FEATURES AND BENEFITS"
    validateSubFeaturesofFeaturesandBenefits();

    // Click on "REQUIREMENTS" to reveal its sub-elements
    cy.contains('REQUIREMENTS')
        .should('be.visible')
        .click();
    // Validate the visibility of each sub-feature under "REQUIREMENTS"
    validateSubFeaturesOfRequirements();

    // Click on "AVAILABLE CHANNELS" to reveal its sub-elements
    cy.contains('AVAILABLE CHANNELS')
        .should('be.visible')
        .click();
         // close social media icons
    cy.get('.nav > .cg-icon-close').click()
    // Validate the visibility of each sub-feature under "AVAILABLE CHANNELS"
    validateSubFeaturesOfAvailableChannels();
}

function validateSubFeaturesofFeaturesandBenefits() {
    // Assert each sub-feature under "FEATURES AND BENEFITS"
    cy.contains('Zero account opening balance').should('be.visible');
    cy.contains('Zenith Mobile Banking app').should('be.visible');
    cy.contains('MasterCard/Visa/Verve debit card').should('be.visible');
    cy.contains('Email/SMS Alertz').should('be.visible');
    cy.contains('Cheque book').should('be.visible');
}

function validateSubFeaturesOfRequirements() {
    // Assert each sub-feature under "REQUIREMENTS"
    cy.contains('Account opening form duly completed').should('be.visible');
    cy.contains('One recent clear passport photograph of signatory').should('be.visible');
    cy.contains('Identification of signatories').should('be.visible');
    cy.contains('Residence permit (where applicable)').should('be.visible');
    cy.contains('Two independent and satisfactory references').should('be.visible');
    cy.contains('Public Utility Receipt dated within the last three months').should('be.visible');
}

function validateSubFeaturesOfAvailableChannels() {
    // Assert each sub-feature under "AVAILABLE CHANNELS"
    cy.contains('In-branch at any Zenith Bank branch').should('be.visible');
    cy.contains('ZenithDirect – our 24/7 telephone banking').should('be.visible');
    cy.contains('Zenith Bank ATM nation-wide').should('be.visible');
    cy.contains('Access your account using your Zenith Bank debit card at participating merchant stores for payment of goods and services in Nigeria and anywhere in the world').should('be.visible');
}