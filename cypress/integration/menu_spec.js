describe('Main menu', () => {
  it('should go to each page corresponding to each menu item', () => {
    cy.visit('/')
    // Experiences
    cy.get('[data-cy="Menu_link_/experiences"]').click()
    cy.get('[data-cy="Experiences"]').should('exist')

    // Blog
    cy.get('[data-cy="Menu_link_/blog"]').click()
    cy.get('[data-cy="BlogPostItems"]').should('exist')

    // Contact
    cy.get('[data-cy="Menu_link_/contact"]').click()
    cy.get('[data-cy="Contact"]').should('exist')

    // Skills
    cy.get('[data-cy="Menu_link_/"]').click()
    cy.get('[data-cy="Skills"]').should('exist')
  })
})
