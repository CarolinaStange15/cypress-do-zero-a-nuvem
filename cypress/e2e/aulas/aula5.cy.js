describe("Aulinha de checkBox", () => {
  beforeEach(() => {
    cy.visit("src/index.html");
  })

it("Marca os dois checkBox mas depois desmarca o último ", () => {
cy.get('input[type="checkbox"][value="email"]').check({ delay: 100 })
.should('be.checked')
cy.get('input[type="checkbox"][value="phone"]').check({ delay: 100 })
cy.get('input[type="checkbox"][value="phone"]').uncheck({ delay: 100 })
cy.get('input[type="checkbox"]').last().should('not.be.checked')

})
})
