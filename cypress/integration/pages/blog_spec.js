describe('Blog page', () => {
  it('should have a custom title and description', () => {
    cy.visit('/blog')
    cy.get('[data-cy="BlogPostItems"]').should('exist')
    cy.get('head title').should('contain', 'Blog')
    cy.get('head meta[name="description"]').should('have.attr', 'content')
  })
})
