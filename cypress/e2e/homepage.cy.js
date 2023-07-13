describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })

  describe('My First Test', () => {
    it('finds the content "type"', () => {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type')
    })
  })
  
  describe('Practice', () => {
    it('visits the site', () => {
      cy.visit('https://demoqa.com/')

      cy.contains('type').click()

      //cy.url().should('include', '/commands/actions')
    })

    
  
    // it('requires first name', () => {
    //   cy.get('[data-testid="first-name"]').type('Johnny')
    // })
  
    // it('requires last name', () => {
    //   cy.get('[data-testid="last-name"]').type('Appleseed')
    // })
  
    // it('can submit a valid form', () => {
    //   cy.get('form').submit()
    // })
  })

// describe('My First Test', () => {
//     it('Does not do much!', () => {
//       expect(true).to.equal(true)
//     })
//   })