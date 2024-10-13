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
