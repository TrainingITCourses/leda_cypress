// interceptors with fixtures

/**
 * Given I am a valid logged-in user visiting the first published activity page
 *  When I click on the "Book" button
 *   Then I should see a confirmation message
 */
describe("Given I am a valid logged-in user visiting the first published activity page", () => {
  beforeEach(() => {});
  context("When I click on the 'Book' button", () => {
    beforeEach(() => {});
    it("Then I should see a confirmation message", () => {
      // Arrange
      const postBookingUrl = `${Cypress.env("apiUrl")}/bookings`;
      const response = { statusCode: 201 };
      cy.intercept("POST", postBookingUrl, response).as("postBooking");
      cy.login();
      cy.visit("/activities/standup-surfing");
      cy.wait(2000);
      // Act
      cy.get("#bookingActivity").as("bookingActivity");
      cy.get("@bookingActivity").focus().click().blur();
      // Assert
      cy.wait("@postBooking");
      cy.get("h3").should("contain", "Booking successfully done");
    });
  });
});
