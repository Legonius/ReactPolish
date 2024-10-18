// import { expect } from "jest";
import { fireEvent, render, screen } from "@testing-library/react";
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

  // Check text on Button after click event
  it("Should change text on button when click", () => {
    render(<Body />);
    const button = screen.getByRole("button", { name: "Filter High Ratings" });
    fireEvent.click(button);
    const textButton = screen.getByRole("button", { name: "Unfilter" });
    expect(textButton).toBeInTheDocument();
  });
});
