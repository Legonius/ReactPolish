import Card from "./Card";
import { useEffect } from "react";
import Loading from "./Loading";

const Body = ({ props }) => {
  const { restaurentList, setRestaurentList } = props;

  useEffect(() => {
    fetching();
  }, []);
  const fetching = async () => {
    try {
      let data = await fetch(
        "https://dummyjson.com/products/category/groceries"
      );
      data = await data.json();
      setRestaurentList(data.products);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main className="cards-container">
      {restaurentList.length > 0 ? (
        restaurentList?.map((restaurent) => (
          <Card key={restaurent.id} obj={restaurent} />
        ))
      ) : (
        <Loading count={15} />
      )}
    </main>
  );
};

export default Body;
