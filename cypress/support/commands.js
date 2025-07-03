Cypress.Commands.add('preencherNomes', user => {
    cy.get('#firstName').type(user.firstName)
    cy.get('#lastName').type(user.lastName)
} )




