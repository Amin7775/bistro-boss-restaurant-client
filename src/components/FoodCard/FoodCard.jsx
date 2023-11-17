const FoodCard = ({ item }) => {
  const { name, recipe, image, price} = item;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={image} />
      </figure>
      <div className="card-body text-black text-center flex flex-col items-center">
        <h2 className="card-title ">{name}</h2>
        <h2 className="card-title absolute top-4 right-4 bg-black bg-opacity-80 px-3 py-1 text-white">{price}$</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
