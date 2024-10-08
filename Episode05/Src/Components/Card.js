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
export default Card;
