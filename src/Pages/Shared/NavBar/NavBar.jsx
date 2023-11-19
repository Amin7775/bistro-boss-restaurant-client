import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";

const NavBar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const [cart]= useCart()

  const handleLogout = () => {
    logoutUser().then(console.log("success"));
  };
  const navOptions = (
    <>
      <li >
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/menu"}>Menu</Link>
      </li>
      <li>
        <Link to={"/order/salad"}>Order</Link>
      </li>
      <li>
        <Link to={"/"}>
          <button className="  text-inherit">
          <FaShoppingCart className="text-xl inline-block"/>
            <div className="badge badge-secondary">{cart.length}</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          <button onClick={handleLogout} className="btn btn-ghost pb-2">
            Logout
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </>
      )}
      {/* <li>
        <Link to={'/signup'}>Sign Up</Link>
      </li> */}
    </>
  );

  return (
    <div>
      <div className="navbar bg-black bg-opacity-25 text-white fixed max-w-screen-xl mx-auto z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <p>Bistro Boss</p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
