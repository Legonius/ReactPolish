import Card from "./Card";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const Body = () => {
  const [filtered, setFiltered] = useState(false);
  const [restaurentList, setRestaurentList] = useState([]);
  const [copyList, setCopyList] = useState([]);
  const [search, setSearch] = useState("");

  console.log("Body");
  const filterList = () => {
    if (!filtered) {
      let filter = restaurentList?.filter((res) => Number(res.rating) >= 3);
      setCopyList(filter);
      setFiltered(!filtered);
    } else {
      setFiltered(!filtered);
      setCopyList(restaurentList);
    }
  };

  useEffect(() => {
    fetching();
    console.log("fetching");
  }, []);
  const fetching = async () => {
    try {
      let data = await fetch(
        "https://dummyjson.com/products/category/groceries"
      );
      data = await data.json();
      setRestaurentList(data.products);
      setCopyList(data.products);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCopyList(
      restaurentList.filter((list) =>
        list.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const dynamicResult = (e) => {
    setSearch(e.target.value);
    setCopyList(
      restaurentList.filter((list) =>
        list.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  };
  return (
    <main className="cards-container">
      <div id="filter" style={{ width: "100%", paddingBottom: "2rem" }}>
        <button onClick={filterList}>
          {!filtered ? "Filter High Ratings" : "Unfilter"}
        </button>
        <form onSubmit={handleSearch}>
          <input
            onChange={(e) => dynamicResult(e)}
            type="text"
            value={search}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {copyList.length > 0 ? (
        copyList?.map((restaurent) => (
          <Card key={restaurent.id} obj={restaurent} />
        ))
      ) : (
        <Loading count={15} />
      )}
    </main>
  );
};

export default Body;
