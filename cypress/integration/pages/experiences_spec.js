describe('Experiences page', () => {
  it('should have a custom title and description', () => {
    cy.visit('/experiences')
    cy.get('[data-cy="Experiences"]').should('exist')
    cy.get('head title').should('contain', 'Éxperiences')
    cy.get('head meta[name="description"]').should('have.attr', 'content')
  })
})
