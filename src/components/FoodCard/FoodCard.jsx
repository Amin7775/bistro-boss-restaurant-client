import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure()
  const [,refetch] = useCart();

  const { name, recipe, image, price, _id } = item;
  const { user } = useAuth();

  const handleAddToCart = (food) => {
    console.log(food);
    if (user && user?.email) {
      console.log("user :>> ", user);
      const cartItem = {
        menuId: _id,
        name,
        price,
        image,
        email: user.email,
      };

      axiosSecure.post("/cart", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} has been added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          //refetch data
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You Are Not Logged In",
        text: "You Need To Be Logged In To Add Menu Items On Cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go To Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={image} />
      </figure>
      <div className="card-body text-black text-center flex flex-col items-center">
        <h2 className="card-title ">{name}</h2>
        <h2 className="card-title absolute top-4 right-4 bg-black bg-opacity-80 px-3 py-1 text-white">
          {price}$
        </h2>
        <p>{recipe}</p>
        <div className="card-actions mt-5">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline bg-gray-100 border-0 border-b-4 text-[#BB8506] hover:text-[#BB8506] hover:border-[#BB8506] px-5 transition-colors duration-500"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
