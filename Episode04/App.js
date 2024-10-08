import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data.json";

let res = data.sections.SECTION_SEARCH_RESULT;
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

const Card = ({ obj }) => {
  const { order } = obj;
  const { name, cuisine, image, rating } = obj.info;
  return (
    <div className="card">
      <div>
        <img src={image.url} />
        <span className="stars">{rating.aggregate_rating}</span>
      </div>
      <div>
        <span>{name}</span>
        <span>{cuisine.map((n) => n.name).join(", ")}</span>
        <span>{order.deliveryTime}</span>
        <button>Order</button>
      </div>
    </div>
  );
};

const Body = () => (
  <main className="cards-container">
    {res.map((restaurent) => (
      <Card key={restaurent.info.resId} obj={restaurent} />
    ))}
    {res.map((restaurent) => (
      <Card key={restaurent.info.resId} obj={restaurent} />
    ))}
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
