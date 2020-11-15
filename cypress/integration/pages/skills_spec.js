describe('Skills page', () => {
  it('should have a custom title and description', () => {
    cy.visit('/')
    cy.get('[data-cy="Skills"]').should('exist')
    cy.get('head title').should('contain', 'Développeur')
    cy.get('head meta[name="description"]').should('have.attr', 'content')
  })
})
