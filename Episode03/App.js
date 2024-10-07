import React from "react";
import ReactDOM from "react-dom/client";

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
    <>
      <Container />
      <Paragraph />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Apps />);
