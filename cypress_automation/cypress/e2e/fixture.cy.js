describe('Cypress Test', () => {
    //before each test, navigate to baseURL
    beforeEach(() => {
        cy.visit('/');
    })

    it('Select a country from cy.fixture()', () => {
        cy.once('uncaught:exception', () => false)

        cy.contains("Tests").click()
        cy.contains("Golf_Course").click({force:true})

        cy.fixture('country.json').then((data) => {
            cy.get('select').select('Mexico')
            cy.get('select').should('have.value', 'Mexico')

            cy.contains("Filter").click()

            cy.contains(data.Mexico).should('not.be.visible')
        })
    })
})