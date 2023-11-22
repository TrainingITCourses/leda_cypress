describe("la página home de Leda", () => {
  it("muestra la información de bienvenida", () => {
    cy.visit("https://www.leda-mc.com/");
    cy.get(".wp-block-group__inner-container > .mt-5").contains("Mejoramos");
    cy.get(".wp-block-group__inner-container > .btn").contains("Quiero");
  });
});
