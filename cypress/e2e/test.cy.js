describe('the only test', () => {
  it('should open page', () => {
    cy.visit('http://localhost:3000')
    const field = cy.get('[data-testid="nameInput"]');
    field.type('ilya')
    cy.get('[data-testid="submitButton"]').click();
    cy.get('[data-testid="resultText"]').contains('Your name is ilya')
  })
})
