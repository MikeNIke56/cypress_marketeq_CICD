describe('Checkbox Functionality', () => {

    it('Handle Checkbox', () => {
        cy.visit('https://staging-marketeq-projects.vercel.app/checkout/comprehensive-external-penetration-test-for-financial-services-platform-383ebfeb/payment')

        handleCheckBox();
    })

})

function handleCheckBox()
{
    cy.get('#save-default-payment-method').click();
}
