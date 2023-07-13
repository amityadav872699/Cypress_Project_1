describe('My First Cypress Test', function() {
    it('Visits the ToolsQA Demo Page and check the menu items', function() {
    //Visit the Demo QA Website
    cy.visit("https://demoqa.com/");

    // Clicking on Elements Menu Item
    cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg').click();
    //Verify number of items present under the Elements Tab
    cy.get(':nth-child(1) > .element-list > .menu-list > li').should('have.length',9);

    // Clicking on Form Menu Item
    cy.get(':nth-child(2) > :nth-child(1) > .avatar > svg').click();
    //Verify number of items present under the Form Tab
    cy.get(':nth-child(2) > .element-list > .menu-list > li').should('have.length',9);

    // Clicking on Alerts,Frame & Windows Menu Item
    cy.get(':nth-child(3) > :nth-child(1) > .avatar > svg').click();
    //Verify number of items present under the  Alerts,Frame & Windows Tab
    cy.get(':nth-child(3) > .element-list > .menu-list > li').should('have.length',9);

   // Clicking on Widget Menu Item
    cy.get(':nth-child(4) > :nth-child(1) > .avatar > svg').click();
    //Verify number of items present under the Widget Tab
    cy.get(':nth-child(4) > .element-list > .menu-list > li').should('have.length',9);

    // Clicking on Interactions Menu Item
    cy.get(':nth-child(5) > :nth-child(1) > .avatar > svg').click();
    //Verify number of items present under the Interactions Tab
    cy.get(':nth-child(5) > .element-list > .menu-list > li').should('have.length',9);

    // Clicking on Book Store Application Menu Item
    cy.get(':nth-child(6) > :nth-child(1) > .avatar > svg').click();
    //Verify number of items present under the Book Store Application Tab
    cy.get(':nth-child(6) > .element-list > .menu-list > li').should('have.length',9);


  })
  })
