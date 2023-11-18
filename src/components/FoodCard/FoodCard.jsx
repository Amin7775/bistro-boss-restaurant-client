const FoodCard = ({ item }) => {
  const { name, recipe, image, price} = item;
  const handleAddToCart = food => {
    console.log(food)
  }
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={image} />
      </figure>
      <div className="card-body text-black text-center flex flex-col items-center">
        <h2 className="card-title ">{name}</h2>
        <h2 className="card-title absolute top-4 right-4 bg-black bg-opacity-80 px-3 py-1 text-white">{price}$</h2>
        <p>{recipe}</p>
        <div className="card-actions mt-5">
          <button onClick={()=>handleAddToCart(item)} className="btn btn-outline bg-gray-100 border-0 border-b-4 text-[#BB8506] hover:text-[#BB8506] hover:border-[#BB8506] px-5 transition-colors duration-500">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
