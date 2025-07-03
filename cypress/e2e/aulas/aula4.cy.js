describe("Aulinha de radio button", () => {
  beforeEach(() => {
    cy.visit("src/index.html");
  })

it("Seleciona o feedback", () => {
cy.get('input[type="radio"]').check('feedback');})

})
