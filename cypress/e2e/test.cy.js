describe('the only test', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should display name', () => {
    const field = cy.get('[data-testid="nameInput"]');
    field.type('ilya')
    cy.get('[data-testid="submitButton"]').click();
    cy.get('[data-testid="resultText"]').contains('Your name is ilya')
  })

  it('should count right', () => {
    const increment = cy.get('[data-testid="increment"]');
    const decrement = cy.get('[data-testid="decrement"]');
    cy.get('[data-testid="counter"]').contains('0 count')
    increment.click();
    cy.get('[data-testid="counter"]').contains('1 count')
    decrement.click()
    decrement.click()
    cy.get('[data-testid="counter"]').contains('-1 count')
  })
})
