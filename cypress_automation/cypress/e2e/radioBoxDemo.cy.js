describe('Radio Box Functionality', () => {

    it('Radio Box  Checkbox', () => {
        cy.visit('https://staging-marketeq-projects.vercel.app/checkout/comprehensive-maintenance-optimization-for-legacy-erp-application-23ee1a52/payment');

        handleRadioBox();
    })

})

function handleRadioBox()
{
    cy.get('[aria-checked="false"] > .inline-flex').click();
}
