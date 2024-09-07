const { visitAndEnsureLogin, goToCreateEmployee } = require("./utils");

describe("Register all empty employee", () => {
    it("Delete user with all mandatory fields empty", () => {
        visitAndEnsureLogin();
        goToCreateEmployee();

        cy.get('[type="submit"]').click();
        cy.get(".swal2-popup").should("be.visible");
    })
})