/* eslint-disable max-lines */
/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

export const TOKEN_KEY = "user-access-token";

Cypress.Commands.add("loginUI", () => {
  const loginUrl = "/auth/login";
  const credentials: any = {
    email: "jeff@gates.org",
    password: "1234",
  };
  const loginApiUrl = `${Cypress.env("apiUrl")}/login`;
  cy.visit(loginUrl);
  cy.intercept("POST", loginApiUrl).as("postLogin");
  cy.get("#email").focus().clear().type(credentials.email).blur();
  cy.get("#password").focus().clear().type(credentials.password).blur();
  cy.get("form button[type=submit]").should("be.enabled").click();
  cy.wait("@postLogin");
});
Cypress.Commands.add("loginUiVariable", (email: string, password: string) => {
  const loginUrl = "/auth/login";
  const loginApiUrl = `${Cypress.env("apiUrl")}/login`;
  cy.visit(loginUrl);
  cy.intercept("POST", loginApiUrl).as("postLogin");
  cy.get("#email").focus().clear().type(email).blur();
  cy.get("#password").focus().clear().type(password).blur();
  cy.get("form button[type=submit]").should("be.enabled").click();
  cy.wait("@postLogin");
});

Cypress.Commands.add("login", () => {
  cy.fixture("user-token.json").then((useToken) => {
    localStorage.setItem("lab_user-token", JSON.stringify(useToken));
  });
});

declare global {
  namespace Cypress {
    interface Chainable {
      loginUI(): Chainable<null>;
      loginUiVariable(email: string, password: string): Chainable<null>;
      login(): Chainable<null>;
    }
  }
}
