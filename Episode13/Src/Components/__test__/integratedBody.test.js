import {
  fireEvent,
  getAllByTestId,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../Mock/products.json";
import { act } from "react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve({ products: MOCK_DATA });
    },
  });
});

describe("Should fetch properly and renders acording to search and filters", () => {
  it("Should filters high rating products", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const filterButton = screen.getByRole("button", {
      name: "Filter High Ratings",
    });
    fireEvent.click(filterButton);
    const cards = screen.getAllByTestId("testCard");

    expect(cards.length).toBe(21);
  });

  it("Should show search result of with keywords food", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    const searchInput = screen.getByTestId("test-search");
    fireEvent.change(searchInput, { target: { value: "food" } });

    const searchBtn = screen.getByRole("button", { name: "Search" });
    fireEvent.click(searchBtn);

    const testCard = screen.getAllByTestId("testCard");
    expect(testCard.length).toBe(2);
  });
});
