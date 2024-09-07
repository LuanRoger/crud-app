const { visitAndEnsureLogin, goToCreateEmployee } = require("./utils");

describe("Register success employee", () => {
  it("Register employee", () => {
    visitAndEnsureLogin();
    goToCreateEmployee();

    cy.get("#firstName").type("John");
    cy.get("#lastName").type("Doe");
    cy.get("#email").type("johndoe@example.com");
    cy.get("#salary").type("9999");
    cy.get("#date").type("2011-09-11");

    cy.get('[type="submit"]').click();

    cy.get("table tbody tr")
      .last()
      .should("contain.text", "John");
  });
});
