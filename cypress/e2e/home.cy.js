describe('la página home de Leda', () => {
  it('muestra la información de bienvenida', () => {
    cy.visit('')
    cy.get('.wp-block-group__inner-container > .mt-5').contains('Mejoramos')
    cy.get('.wp-block-group__inner-container > .btn').contains('Quiero')
  })
})