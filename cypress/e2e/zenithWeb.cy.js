import { web } from "../fixtures/selectors.js";
describe('Automated Test for Zenith Bank', () => {
    beforeEach(() => {
        // Navigate to the Zenith Bank website
        cy.visit('/')
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
        cy.get(web.currentAccount).click()
        // Validate features of Individual Current Account
        validateFeaturesOfCurrentAccount();
    });
});
function validateFeaturesOfCurrentAccount() {

    cy.contains('REQUIREMENTS')
        .should('be.visible')
        // Click on "REQUIREMENTS" to reveal its sub-elements
        .click();
    // Validate the visibility of each sub-feature under "REQUIREMENTS"
    validateSubFeaturesOfRequirements();
    cy.contains('AVAILABLE CHANNELS')
        .should('be.visible')
        .click();
    // Validate the visibility of each sub-feature under "AVAILABLE CHANNELS"
    validateSubFeaturesOfAvailableChannels();
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
    cy.scrollTo('top');
    cy.contains('AVAILABLE CHANNELS')
        .should('be.visible')
        cy.wait(7000)
   cy.contains('Banking').should('be.visible');
    cy.contains('In-branch at any Zenith Bank branch').should('be.visible');
    cy.contains('ZenithDirect our 24/7 telephone banking').should('be.visible');
    cy.contains('Zenith Bank ATM nation-wide').should('be.visible');
    cy.contains('In-branch at any Zenith Bank branch').should('be.visible');
}