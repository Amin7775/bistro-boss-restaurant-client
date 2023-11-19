import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
  const [cart,refetch] = useCart();
const axiosSecure = useAxiosSecure()

  const totalPrice = cart.reduce((previous, current) => {
    return (current = previous + current.price);
  }, 0);

  const handleDelete = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          
            axiosSecure.delete(`/cart/${id}`)
            .then(res => {
                if(res.data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      refetch();
                }
            })
        }
      });
  }


  return (
    <div>
      <div className="my-8">
        <SectionTitle
          Heading={"manage all items"}
          SubHeading={"Hurry Up"}
        ></SectionTitle>
      </div>
      <div className="w-5/6 bg-white mx-auto min-h-[70vh]">
        <div className="p-10 flex justify-between">
          <h1 className="text-3xl font-medium">Total Orders : {cart.length}</h1>
          <h1 className="text-3xl font-medium">Total Price : {totalPrice}</h1>
          <button className="btn bg-orange-500 text-white text-xl px-8 ">
            Pay
          </button>
        </div>
        <div className="w-full mx-auto px-5">
            
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    #
                  </th>
                  <th>image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {cart.map((item,index)=> <tr key={item._id}>
                  <th>
                    {index+1}
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      
                    </div>
                  </td>
                  <td>
                    {item.name}
                  </td>
                  <td>{item.price}</td>
                  <th>
                    <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-lg"><FaTrashAlt></FaTrashAlt></button>
                  </th>
                </tr>)}
                {/* row 1 */}
                
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
