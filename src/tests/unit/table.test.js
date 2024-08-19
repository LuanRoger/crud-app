import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "../../components/Dashboard/Table";
import { employees } from "../mocks/employees";

test("Showing at least one employee", async () => {
  render(
    <Table
      employees={employees}
      handleEdit={() => {}}
      handleDelete={() => {}}
    />
  );
  const element = screen.getByTestId("1-row");

  expect(element).toBeInTheDocument();
});

test("Showing all employees", async () => {
  render(
    <Table
      employees={employees}
      handleEdit={() => {}}
      handleDelete={() => {}}
    />
  );
  const employee1 = screen.getByTestId("1-row");
  const employee2 = screen.getByTestId("2-row");
  const employee3 = screen.getByTestId("3-row");

  expect(employee1).toBeInTheDocument();
  expect(employee2).toBeInTheDocument();
  expect(employee3).toBeInTheDocument();
});
