describe('Verify demoqa Home Page', () => {

    it('Verify demoqa logo is visible', () => {

        cy.visit('https://demoqa.com/');

        cy.get('#logo').should('be.visible');

    })

    it('Verify Header is present', () => {

        cy.get('h1').first().should('be.exist');

    })

    it('Verify Elements are present', () => {

        cy.get('#Text-Box').first().should('be.exist');

        cy.get('#Check-Box').first().should('be.exist');

        cy.get('#Radio-Button').first().should('be.exist');

    })

    // it('Verify menu Links are  present', () => {

    //     cy.get("a[title='Pricing']").first().should('be.exist');

    //     cy.get("a[title='Sign In']").first().should('be.exist');

    //     cy.get("a[title='Live for Teams']").first().should('be.exist');

    // })

})