import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Dashboard from "../../components/Dashboard/index";
import { employees } from "../mocks/employees";

test("delete sucess", async () => {
  render(<Dashboard setIsAuthenticated={true} employeesData={employees} />);

  screen.getByTestId("1-delete-button").click();

  expect(await screen.findByText("Are you sure?")).toBeInTheDocument();
  
  const yesButton = screen.getByText(/Yes, delete it!/i);
  yesButton.click();

  await waitFor(() => {
    expect(screen.queryByText(/Susan Jordon/i)).not.toBeInTheDocument(); // Ajuste o texto para o que você espera
  });
});

test("delete abort", async () => {
    render(<Dashboard setIsAuthenticated={true} employeesData={employees} />);

    screen.getByTestId("1-delete-button").click();
  
    expect(await screen.findByText("Are you sure?")).toBeInTheDocument();
    
    const cancelButton = screen.getByText(/No, cancel!/i);
    cancelButton.click();

    expect(screen.getByTestId('1-row')).toBeInTheDocument();
});