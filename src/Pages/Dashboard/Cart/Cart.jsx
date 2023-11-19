import useCart from "../../../hooks/useCart";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((previous, current) => {
    return (current = previous + current.price);
  }, 0);
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
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>Purple</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
