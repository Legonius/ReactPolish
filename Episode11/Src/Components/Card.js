const Card = ({ obj }) => {
  const { images, rating, title, price } = obj;
  return (
    <div className="card">
      <div>
        <img src={images[0]} loading="lazy" />
        <span className="stars">{Number(rating) > 0 ? rating : "New"}</span>
      </div>
      <div>
        <span>{title}</span>
        <span>price: {price} $</span>
        <button>Order</button>
      </div>
    </div>
  );
};
export default Card;

const higherOrderComponentCard = (Card) => {
  return (props) => {
    return (
      <div className=" relative">
        <div
          style={{
            backgroundColor: "gray",
            color: "white",
            position: "absolute",
            borderRadius: "5px",
            padding: "2px 4px",
          }}
        >
          recommended
        </div>
        <Card obj={props.obj} />
      </div>
    );
  };
};

export { higherOrderComponentCard };
