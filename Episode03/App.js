import React from "react";
import ReactDOM from "react-dom/client";

const container = (
  <div className="container">
    <h1>Namaste React</h1>
    <h2>Babel is Transpiling well</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
