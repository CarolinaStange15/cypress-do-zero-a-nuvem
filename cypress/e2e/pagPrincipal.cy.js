import { PagPrincipal } from '../pages/PagPrincipal';

describe('Testando Page Objects', () => {
  const pag = new PagPrincipal();

  beforeEach(() => {
    cy.visit('src/index.html'); // carregando a página antes de cada teste
  });

  it('preenche todos os campos', () => {
    pag.preencher('Carolina', 'Stange', 'Carolina@gmail.com','Achando a aula bem legal!!!','489999405366');
    //pag.firstNameInput().should('have.value', 'Carolina')
   // pag.lastNameInput().should('have.value', 'Stange')
   // pag.emailInput().should('have.value', 'Carolina@gmail.com')
  //  pag.feedbackInput().should('have.value', 'Achando a aula bem legal!!!')
   // pag.phoneInput().should('have.value', '489999-405366')



  });


});