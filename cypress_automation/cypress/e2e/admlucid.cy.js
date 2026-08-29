describe('Cypress Test', () => {
    it('Navigate to adm lucid', () =>{
        cy.visit('/')
        cy.url().should('contains', 'admlucid')
        cy.title().should('eq', 'Home Page - Admlucid')
    })

    it('Login amd lucid', () =>{
        cy.Login("testengineeringacct57@gmail.com", "blah")
    })
})