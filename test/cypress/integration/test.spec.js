/// <reference types="Cypress" />

context('Test', () => { 
  
    it('Do something', () => {
        cy.visit("localhost");
        cy.log("doing something");
        cy.matchImageSnapshot();
    })
})