import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../Card";
import MOCK_DATA from "../Mock/mockdata.json";

describe("Should render card with props", () => {
  it("Should render all details getting as props object", () => {
    render(<Card obj={MOCK_DATA} />);

    const title = screen.getByText("Apple");
    expect(title).toBeInTheDocument();
  });
  it("Should render all details getting as props object with recommended tag", () => {
    const higherOrderComponentCard = (Card) => {
      return (props) => {
        return (
          <div className=" relative">
            <div
              style={{
                backgroundColor: "gray",
                color: "white",
                position: "absolute",
                borderRadius: "5px",
                padding: "2px 4px",
              }}
            >
              recommended
            </div>
            <Card {...props} />
          </div>
        );
      };
    };
    const RecommendedCard = higherOrderComponentCard(Card);
    render(<RecommendedCard obj={MOCK_DATA} />);
    const recommended = screen.getByText("recommended");
    expect(recommended).toBeInTheDocument();
  });
});
