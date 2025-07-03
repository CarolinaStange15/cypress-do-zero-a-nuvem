const preencherForm = {
    fillForm: user => {
    cy.get('#firstName').type(user.firstName)
    cy.get('#lastName').type(user.lastName)
    cy.get('#email').type(user.email)
    cy.get('#phone').type(user.phone)
    cy.get('#open-text-area').type(user.openTextArea)

    }
}

module.exports = preencherForm


