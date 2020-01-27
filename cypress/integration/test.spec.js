/// <reference types="Cypress" />

context('Test', () => {
    beforeEach(() => {
      cy.visit('localhost:8180')
    })
  
    it('Do something', () => {
        cy.log("doing something");
    })
})