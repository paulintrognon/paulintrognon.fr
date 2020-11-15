describe('Contact page', () => {
  it('should have a custom title and description', () => {
    cy.visit('/contact')
    cy.get('[data-cy="Contact"]').should('exist')
    cy.get('head title').should('contain', 'Contact')
    cy.get('head meta[name="description"]').should('have.attr', 'content')
  })
})
