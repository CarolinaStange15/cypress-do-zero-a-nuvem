describe("Lidando com links que abrem em outra aba", () => {
  it("verifica que a política de privacidade abre em outra aba sem a necessidade de um clique", () => {
    cy.visit("src/index.html");
    cy.get('a[href*="privacy.html"]').should("have.attr", "target", "_blank");
  
})

 it("acessa a página da política de privacidade removendo o target e então clicando no link", () => {
    cy.visit("src/index.html");
    cy.get('a[href*="privacy.html"]').should("have.attr", "target", "_blank");
    cy.get('a[href*="privacy.html"]')
    .invoke('removeAttr', 'target')
    .click();
 })

})
