  it('seleciona um produto (YouTube) por seu texto', () => {
        cy.visit('src/index.html')
        cy.get('#product').select('YouTube')
        .should('have.value','youtube')
       })

       it('seleciona um produto (Mentoria) por seu valor', () => {
        cy.visit('src/index.html')
        cy.get('#product').select('mentoria')
        .should('have.value','mentoria')
       })

       it.only('seleciona um produto (Blog) por seu indice', () => {
        cy.visit('src/index.html')
        cy.get('#product').select(1)
        .should('have.value','blog')
       })