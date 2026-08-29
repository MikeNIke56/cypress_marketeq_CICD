describe("wait test", () => {
    it("wait for default 4s", () => {
        cy.once("uncaught:exception", () => false)
        cy.visit('/')
        cy.contains("Tests").click()
        cy.contains("Web_Elements").click({force:true})
        cy.get("#Button1").should("be.visible").click()
    })
})