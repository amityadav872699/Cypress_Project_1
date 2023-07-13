//Cypress Asynchronous Nature

describe('Search Test Suite', function () {
    it('Search Cucumber Test Case', function () {

        cy.visit('https://demoqa.com/')
        
        // Clicking on Widget Menu Item
        cy.get(':nth-child(4) > :nth-child(1) > .avatar > svg').click();
        
        //Verify number of items present on Widget Tab
        cy.get(':nth-child(4) > .element-list > .menu-list > li').should('have.length',9);
   })
})