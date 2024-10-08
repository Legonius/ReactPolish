import Card from "./Card";

const Body = ({ resList }) => (
  <main className="cards-container">
    {resList.map((restaurent) => (
      <Card key={restaurent.info.resId} obj={restaurent} />
    ))}
    {resList.map((restaurent) => (
      <Card key={restaurent.info.resId} obj={restaurent} />
    ))}
  </main>
);
export default Body;
