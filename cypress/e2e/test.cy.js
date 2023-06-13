describe('the only test', () => {
  it('should open page', () => {
    cy.visit('http://localhost:3000')
    const field = cy.get('input');
    field.type('9090')
    cy.get('button').click();
    cy.contains('Your name is ilya')
  })
})
