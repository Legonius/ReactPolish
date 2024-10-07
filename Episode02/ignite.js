import React from "react";
import ReactDOM from "react-dom";

const headig = React.createElement(
  "h1",
  { key: "heading", id: "h1" },
  "Namaste React"
);

const para = React.createElement("p", { key: "1" }, "This is First Paragraph");
const para2 = React.createElement(
  "p",
  { key: "2" },
  "This is Second Paragraph"
);
const body = React.createElement("div", { key: "body", className: "body" }, [
  para,
  para2,
]);
const footer = React.createElement(
  "footer",
  { key: "footer", id: "footer" },
  "Bye Bye"
);

const app = React.createElement(
  "div", //type
  {
    className: "main",
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100vh",
    },
  }, //props (attribute)
  [headig, body, footer] // children
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);

/*

//props
  "h1", //element
  { className: "headings", style: { fontSize: "5rem" } }, //attrributes
  "Hello World from React" //children


  */
