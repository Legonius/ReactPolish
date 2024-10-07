import React from "react";
import ReactDOM from "react-dom/client";

const footer = (
  <footer style={{ textAlign: "center", marginTop: "4rem" }}>
    Zaw Min Thu, proud student of Akshay Saini
  </footer>
);

function BowDown() {
  return <h1>Bow Down to Babel</h1>;
}

const Container = () => (
  <div className="container">
    <h1>Namaste React</h1>
    <h2>Babel is Transpiling well</h2>
  </div>
);
const Paragraph = () => (
  <div className="container">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
      aperiam adipisci iusto blanditiis, odio placeat! Optio aliquid impedit
      mollitia, quidem illum modi architecto magni provident repudiandae
      sapiente, iusto, laboriosam consequuntur! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Doloremque aperiam adipisci iusto
      blanditiis, odio placeat! Optio aliquid impedit mollitia, quidem illum
      modi architecto magni provident repudiandae sapiente, iusto, laboriosam
      consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Doloremque aperiam adipisci iusto blanditiis, odio placeat! Optio aliquid
      impedit mollitia, quidem illum modi architecto magni provident repudiandae
      sapiente, iusto, laboriosam consequuntur! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Doloremque aperiam adipisci iusto
      blanditiis, odio placeat! Optio aliquid impedit mollitia, quidem illum
      modi architecto magni provident repudiandae sapiente, iusto, laboriosam
      consequuntur!
    </p>
  </div>
);

// Component Composition => Component which return component is call.
const Apps = () => {
  return (
    <div className="container">
      <Container />
      <Paragraph />
      <BowDown />
      {footer}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Apps />);
