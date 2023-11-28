/**
 * An object containing all the selectors for the activities page
 */
export class ActivitiesPage {
  /** Visits the page */
  visit(): void {
    cy.visit("/activities");
  }
  /** Gets the search input control */
  getSearchInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get("#search");
  }

  /** Types in the search input control */
  typeSearchInput(text: string): void {
    this.getSearchInput().clear().type(text);
  }

  /** Gets the list items for the activities */
  getActivitiesListItems(): Cypress.Chainable<JQuery<HTMLLIElement>> {
    return cy.get("#activities-list").find("li");
  }
}
