/// <reference types="Cypress" />

context('Test', () => { 
  
    it('Do something', () => {
        cy.visit("192.168.0.14");
        cy.log("doing something");
        cy.matchImageSnapshot();
    })
})