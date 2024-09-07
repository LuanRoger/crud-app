const { visitAndEnsureLogin } = require("./utils");

describe("Delete employee modal", () => {
  it("Delete button is visible", () => {
    visitAndEnsureLogin();

    const button = cy
      .get("table tbody tr")
      .first()
      .find("button")
      .eq(1)
      .should("be.visible");
    button.click();

    cy.get(".swal2-popup").should("be.visible");
  });
});

describe("Cancel delete employee", () => {
  it("Cancel from modal", () => {
    visitAndEnsureLogin();

    const button = cy
      .get("table tbody tr")
      .first()
      .find("button")
      .eq(1)
      .should("be.visible");
    button.click();

    cy.get(".swal2-popup").should("be.visible");
    cy.get(".swal2-cancel").click();
    cy.get(".swal2-popup").should("not.exist");

    cy.get("table tbody tr").first().should("be.visible");
  });
});
