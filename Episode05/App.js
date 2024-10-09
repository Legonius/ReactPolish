import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import data from "./Src/Utils/data.json";
import NavBar from "./Src/Components/NavBar";
import Footer from "./Src/Components/Footer";
import Body from "./Src/Components/Body";

let resList = data.sections.SECTION_SEARCH_RESULT;

// Component Composition => Component which return component is call.
const Apps = () => {
  const [restaurentList, setRestaurentList] = useState(resList);
  const [filtered, setFiltered] = useState(false);
  const filterList = () => {
    if (!filtered) {
      let filter = restaurentList.filter(
        (res) => Number(res.info.rating.aggregate_rating) >= 3
      );
      setRestaurentList(filter);
      setFiltered(!filtered);
    } else {
      setFiltered(!filtered);
      setRestaurentList(resList);
    }
  };
  2;
  return (
    <div className="container">
      <NavBar />
      <div style={{ width: "100%", paddingBottom: "2rem" }}>
        <button onClick={filterList}>
          {!filtered ? "Filter High Ratings" : "Unfilter"}
        </button>
      </div>
      <Body resList={restaurentList} />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Apps />);
