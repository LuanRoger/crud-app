import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Edit from "../../components/Dashboard/Edit";
import { employees } from "../mocks/employees";

test("Is first name showing", async () => {
  let finalEmployees = Array.from(employees);
  const selectedEmployee = finalEmployees[0];
  render(
    <Edit
      employees={finalEmployees}
      selectedEmployee={selectedEmployee}
      setEmployees={(e) => {
        finalEmployees = e;
      }}
      setIsEditing={(_) => {}}
    />
  );
  const firstName = screen.getByTestId("firstName");

  expect(firstName).toBeInTheDocument();
  expect(firstName).toHaveValue(selectedEmployee.firstName);
});

test("Cancel on invalid input on first name and show modal", async () => {
  let finalEmployees = Array.from(employees);
  const selectedEmployee = finalEmployees[0];
  render(
    <Edit
      employees={finalEmployees}
      selectedEmployee={selectedEmployee}
      setEmployees={(e) => {
        finalEmployees = e;
      }}
      setIsEditing={(_) => {}}
    />
  );
  const firstName = screen.getByTestId("firstName");
  const updateButton = screen.getByTestId("update-submit");

  fireEvent.change(firstName, { target: { value: "" } });
  updateButton.click();

  expect(firstName).toHaveValue("");
  expect(screen.getByText("All fields are required.")).toBeInTheDocument();
});
