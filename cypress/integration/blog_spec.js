describe('Blog', () => {
  it('should list blog posts and we should access them', () => {
    cy.visit('/blog')

    let title
    cy.get('[data-cy="BlogPostItem"]:nth(0) [data-cy="BlogPostItem_title"]')
      .invoke('text')
      .then((text) => {
        title = text
      })

    let excerpt
    cy.get('[data-cy="BlogPostItem"]:nth(0) [data-cy="BlogPostItem_excerpt"]')
      .invoke('text')
      .then((text) => {
        excerpt = text
      })

    cy.get('[data-cy="BlogPostItem"]:nth(0) [data-cy="BlogPostItem_link"]').click()
    cy.get('[data-cy="BlogPost"]').should('exist')

    cy.get('[data-cy="BlogPost_title"]')
      .invoke('text')
      .then((articleTitle) => {
        expect(title).to.equal(articleTitle)
      })

    cy.get('head meta[name="description"]').then(($meta) => {
      expect($meta.attr('content')).to.equal(excerpt)
    })
  })
})
