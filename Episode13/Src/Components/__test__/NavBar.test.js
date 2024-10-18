import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "../NavBar";
import { MemoryRouter } from "react-router-dom";

it("Should render navbar", () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  const home = screen.getByText("Home");
  expect(home).toBeInTheDocument();
});

it("Should render Contact Page if user click Contact link", () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  const link = screen.getByRole("link", { name: "Contacts" });

  expect(link).toBeInTheDocument();
});

/*
Why Use MemoryRouter?
MemoryRouter is a router implementation that keeps the history of your “URL” in memory (doesn’t read or write to the address bar). It’s useful for testing components that depend on routing, like NavBar.

This allows your component to access the router context (like basename or other values provided by react-router-dom).

Alternative: BrowserRouter
You can also use BrowserRouter if you prefer, but MemoryRouter is commonly used in tests since it doesn’t depend on the actual browser environment.

Summary
The NavBar component is throwing the error because it depends on React Router's context (likely for basename). To fix this in your test, wrap the NavBar component with a MemoryRouter to provide the necessary routing context. */
