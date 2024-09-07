import { visitAndEnsureLogin } from "./utils";

describe("Employees table", () => {
  it("Table is visible", () => {
    visitAndEnsureLogin();

    cy.get("table").should("be.visible");
  });

  it("Table has more than 3 rows", () => {
    visitAndEnsureLogin();

    cy.get("table tbody tr").should("have.length.greaterThan", 3);
  });

  it("Row has employee informations", () => {
    visitAndEnsureLogin();

    cy.get("table tbody tr").first().should("contain.text", "Susan");
    cy.get("table tbody tr").first().should("contain.text", "Jordon");
    cy.get("table tbody tr")
      .first()
      .should("contain.text", "susan@example.com");
    cy.get("table tbody tr").first().should("contain.text", "$95,000");
    cy.get("table tbody tr").first().should("contain.text", "2019-04-11");
  });
});
