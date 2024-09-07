export function visitAndEnsureLogin() {
  cy.visit("http://localhost:3000/crud-app", {
    onBeforeLoad: (win) => {
      win.localStorage.setItem("is_authenticated", true);
    },
  });
}

export function goToCreateEmployee() {
  cy.get("button").contains("Add Employee").click();
}
