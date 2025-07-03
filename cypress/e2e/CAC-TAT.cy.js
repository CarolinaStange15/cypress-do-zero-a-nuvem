

      it('preenchimento com comando personalizado', () => {
        cy.visit('src/index.html')
        cy.fixture('user').then((user) => {
        cy.preencherNomes(user);
       });

      })

    


    










      


    


