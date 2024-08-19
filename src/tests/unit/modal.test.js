import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "../../components/Dashboard/index";
import { employees } from "../mocks/employees";

test("Show modal on try to delete", async () => {
  render(<Dashboard setIsAuthenticated={true} employeesData={employees} />);

  screen.getByTestId("1-delete-button").click();

  expect(await screen.findByText("Are you sure?")).toBeInTheDocument();
});
