describe('Uploads ', () => {
    beforeEach(() => {
            cy.visit("src/index.html")
    })
})

it("Selecionar um arquivo", () => {
                cy.visit("src/index.html")
                cy.get('input[type="file"][id = "file-upload"]').selectFile('cypress/fixtures/Carol-curtindo.jpg')
                .then(input => {
                expect(input[0].files[0].name).to.equal('Carol-curtindo.jpg')


                })
            })

it("Selecionar um arquivo simulando um drag-and-drop", () => {
                cy.visit("src/index.html")
                cy.get('input[type="file"][id = "file-upload"]')
                .selectFile('cypress/fixtures/Carol-curtindo.jpg', {action: 'drag-drop'})
                .then(input => {
                expect(input[0].files[0].name).to.equal('Carol-curtindo.jpg')


                })
            })

it("seleciona um arquivo utilizando uma fixture para a qual foi dada um alias", () => {    
    cy.visit("src/index.html")
        cy.fixture('Carol-curtindo.jpg', {encoding: null}).as('exampleFile')

                cy.get('input[type="file"][id = "file-upload"]')
                .selectFile({
                    contents: '@exampleFile',
                    fileName: 'Carol-curtindo.jpg'
                }
                    
                )
                .then(input => {
                expect(input[0].files[0].name).to.equal('Carol-curtindo.jpg')


                })
            })

