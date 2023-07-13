describe('My First Cypress Test', function() {
    it('Visits the ToolsQA Demo Page and check the menu items', function() {
    //Visit the QA Website
    cy.visit("https://demoqa.com/");
    
   // Clicking on Widget Menu Item
    cy.get(':nth-child(4) > :nth-child(1) > .avatar > svg').click();
  
    //Verify number of items present under the Widget Tab
    cy.get(':nth-child(4) > .element-list > .menu-list > li').should('have.length',9);
  
    //Print a string to console to show Async nature 
    console.log('XXXX')
  
    //Verify the number of span items under the Widgets Tab
    cy.get(':nth-child(4) > .element-list > .menu-list > li').find('span').should('have.length',9);
    
  })
  })