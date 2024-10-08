import React from "react";
import ReactDOM from "react-dom/client";

const footer = (
  <footer style={{ textAlign: "center", marginTop: "4rem" }}>
    Zaw Min Thu, proud student of Akshay Saini
  </footer>
);

function NavBar() {
  return (
    <nav>
      <div>
        <img src="https://www.logodesign.net/logo-new/text-in-vintage-banner-9393ld.png?nwm=1&nws=1&industry=food&txt_keyword=All" />
      </div>
      <ul>
        <li>Home</li>
        <li>Contacts</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
}

const Card = ({ dish }) => {
  return (
    <div className="card">
      <div>
        <img src="" />
      </div>
      <div>
        <span>{dish}</span>
        <span>Stars</span>
        <span>Price</span>
        <button>Click</button>
      </div>
    </div>
  );
};

const Body = () => (
  <main className="cards-container">
    <Card dish={"Biryani"} />
    <Card dish={"Biryani"} />
    <Card dish={"Biryani"} />
    <Card dish={"Biryani"} />
    <Card dish={"Biryani"} />
    <Card dish={"Biryani"} />
    <Card dish={"Biryani"} />
    <Card dish={"Biryani"} />
    <Card dish={"Biryani"} />
    <Card dish={"Biryani"} />
    <Card dish={"Biryani"} />
  </main>
);

// Component Composition => Component which return component is call.
const Apps = () => {
  return (
    <div className="container">
      <NavBar />
      <Body />
      {footer}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Apps />);
