/// <reference types="Cypress" />

context('Test', () => {
    beforeEach(() => {
      cy.visit('localhost:8180/index.html')
    })
  
    it('Do something', () => {
        cy.log("doing something");
    })
})