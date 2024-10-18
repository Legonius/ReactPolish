// import { expect } from "jest";
import { render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";

describe("All Body Components check here", () => {
  test("Testing body component", () => {
    render(<Body />);
    let button = screen.getAllByRole("button");
    expect(button.length).toBe(2);
  });

  it("Should Contain Form Element", () => {
    render(<Body />);

    // Querying
    const form = screen.getByRole("form");

    // assertion
    expect(form).toBeInTheDocument();
  });
});
