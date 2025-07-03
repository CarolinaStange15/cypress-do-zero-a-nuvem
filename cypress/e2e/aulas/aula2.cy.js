
describe('Central de Atendimento ao Cliente TAT', () => {
      beforeEach(() => {
      cy.visit('src/index.html')
})

  it('verifica o título da aplicação', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')

     cy.get('#firstName')
        .as('textFieldFirstName')
        .type('Carolina', {delay:0})

      cy.get('@textFieldFirstName')
        .should('have.value', 'Carolina')
       cy.get('#lastName')
        .as('textFieldLastName') 
        .type('Stange', {delay:0}) //Exercicio extra 1
      cy.get('@textFieldLastName')
        .should('have.value', 'Stange')
    
      cy.get('#email')
        .as('textFieldEmail')
        .should('be.visible')
        .type('carolina@gmail.com', {delay:0})
      cy.get('@textFieldEmail')
        .should('have.value', 'carolina@gmail.com')

        cy.get('#phone')
        .as('textFieldPhone')
        .type('4899999999', {delay:0})
      cy.get('@textFieldPhone')
        .should('have.value', '4899999999')

        cy.get('#open-text-area')
        .as('textFieldFeedback')
        .type('Muito legal o curso!', {delay:0})
      cy.get('@textFieldFeedback')
        .should('have.value', 'Muito legal o curso!')
  
      cy.get('button').click()          
      cy.get('.success').should('be.visible')
      })

      //Exercício 2 
      it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {

      cy.get('#firstName')
        .as('textFieldFirstName')
        .type('Carolina', {delay:0})
      cy.get('@textFieldFirstName')
        .should('have.value', 'Carolina')

       cy.get('#lastName')
        .as('textFieldLastName')
        .type('Stange', {delay:0})
      cy.get('@textFieldLastName')
        .should('have.value', 'Stange')
    
      cy.get('#email')
        .as('textFieldEmail')
        .should('be.visible')
        .type('carolinagmail', {delay:0})
      cy.get('@textFieldEmail')
        .should('have.value', 'carolinagmail')

        cy.get('#phone')
        .as('textFieldPhone')
        .type('4899999999', {delay:0})
      cy.get('@textFieldPhone')
        .should('have.value', '4899999999')

        cy.get('#open-text-area')
        .as('textFieldFeedback')
        .type('Muito legal o curso!', {delay:0})
      cy.get('@textFieldFeedback')
        .should('have.value', 'Muito legal o curso!')
  
      cy.get('button').click()          
      cy.get('.error').should('be.visible')
      })

    //Exercício 3  
      it('O campo de telefone rejeita String',() => {
      cy.get('#firstName')
        .as('textFieldFirstName')
        .type('Carolina', {delay:0})

      cy.get('@textFieldFirstName')
        .should('have.value', 'Carolina')
       cy.get('#lastName')
        .as('textFieldLastName')
        .type('Stange', {delay:0})
      cy.get('@textFieldLastName')
        .should('have.value', 'Stange')
    
      cy.get('#email')
        .as('textFieldEmail')
        .should('be.visible')
        .type('carolina@gmail.com', {delay:0})
      cy.get('@textFieldEmail')
        .should('have.value', 'carolina@gmail.com')

        cy.get('#phone')
        .as('textFieldPhone')
        .type('AZAPAPAPAP', {delay:0})
      cy.get('@textFieldPhone')
        .should('have.value', '')

        cy.get('#open-text-area')
        .as('textFieldFeedback')
        .type('Muito legal o curso!', {delay:0})
      cy.get('@textFieldFeedback')
        .should('have.value', 'Muito legal o curso!')
  
      cy.get('button').click()          
      cy.get('.success').should('be.visible')
      })

      //Exercício 4
        it('Mensagem de erro quando o telefone se torna obrigatório', () => {
    
     cy.get('#firstName')
        .as('textFieldFirstName')
        .type('Carolina', {delay:0})

      cy.get('@textFieldFirstName')
        .should('have.value', 'Carolina')
       cy.get('#lastName')
        .as('textFieldLastName')
        .type('Stange', {delay:0})
      cy.get('@textFieldLastName')
        .should('have.value', 'Stange')
    
      cy.get('#email')
        .as('textFieldEmail')
        .should('be.visible')
        .type('carolina@gmail.com', {delay:0})
      cy.get('@textFieldEmail')
        .should('have.value', 'carolina@gmail.com')

      cy.get('#phone-checkbox').check().should('be.checked');

        cy.get('#open-text-area')
        .as('textFieldFeedback')
        .type('Muito legal o curso!', {delay:0})
      cy.get('@textFieldFeedback')
        .should('have.value', 'Muito legal o curso!')
  
      cy.get('button').click()          
      cy.get('.error').should('be.visible')
      })

    it('preenche e limpa os campos', () => {
    
        cy.get('#firstName')
            .as('textFieldFirstName')
            .type('Carolina', {delay:0})
        cy.get('@textFieldFirstName')
        .clear();

       cy.get('#lastName')
        .as('textFieldLastName') 
        .type('Stange', {delay:0}) //Exercicio extra 1
      cy.get('@textFieldLastName')
         .clear();
    
      cy.get('#email')
        .as('textFieldEmail')
        .should('be.visible')
        .type('carolina@gmail.com', {delay:0})
      cy.get('@textFieldEmail')
         .clear();

        cy.get('#phone')
        .as('textFieldPhone')
        .type('4899999999', {delay:0})
      cy.get('@textFieldPhone')
         .clear();

        cy.get('#open-text-area')
        .as('textFieldFeedback')
        .type('Muito legal o curso!', {delay:0})
      cy.get('@textFieldFeedback')
         .clear();
        
      
      })
      }) 