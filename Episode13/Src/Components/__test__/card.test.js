import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card, { higherOrderComponentCard } from "../Card";
import MOCK_DATA from "../Mock/mockdata.json";

describe("Should render card with props", () => {
  it("Should render all details getting as props object", () => {
    render(<Card obj={MOCK_DATA} />);

    const title = screen.getByText("Apple");
    expect(title).toBeInTheDocument();
  });
  it("Should render all details getting as props object with recommended tag", () => {
    const RecommendedCard = higherOrderComponentCard(Card);
    render(<RecommendedCard obj={MOCK_DATA} />);
    const recommended = screen.getByText("recommended");
    expect(recommended).toBeInTheDocument();
  });
});
