// import { expect } from "jest";
import { render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";

test("Testing body component", () => {
  render(<Body />);
  let button = screen.getAllByRole("button");
  expect(button.length).toBe(2);
});
