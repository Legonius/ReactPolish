const Card = ({ obj }) => {
  const { order } = obj;
  const { name, cuisine, image, rating } = obj.info;
  return (
    <div className="card">
      <div>
        <img src={image.url} />
        <span className="stars">
          {Number(rating.aggregate_rating) > 0
            ? rating.aggregate_rating
            : "New"}
        </span>
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
export default Card;
