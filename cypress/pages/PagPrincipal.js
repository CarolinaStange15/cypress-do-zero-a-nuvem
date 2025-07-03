export class PagPrincipal {

  firstNameInput() {
    return cy.get('#firstName'); }

  lastNameInput() {
    return cy.get('#lastName');  }

  emailInput() {
    return cy.get('#email'); }

   phoneInput() {
    return cy.get('#phone'); }

  feedbackInput() {
    return cy.get('#open-text-area'); }

  preencher(firstName,lastName,email,feedback,phone) {
    this.firstNameInput().type(firstName);
    this.lastNameInput().type(lastName);
    this.emailInput().type(email);
    this.phoneInput().type(phone);
    this.feedbackInput().type(feedback);
  }

  preencherNomes() {
    this.firstNameInput().type(firstName);
    this.lastNameInput().type(lastName);
  }


}