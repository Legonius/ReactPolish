import React from "react";
import ReactDOM from "react-dom/client";
import data from "./Src/Utils/data.json";
import NavBar from "./Src/Components/NavBar";
import Footer from "./Src/Components/Footer";
import Body from "./Src/Components/Body";

let resList = data.sections.SECTION_SEARCH_RESULT;

// Component Composition => Component which return component is call.
const Apps = () => {
  return (
    <div className="container">
      <NavBar />
      <Body resList={resList} />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Apps />);
