import { FaAd, FaCalendar, FaHome, FaHouseUser, FaList, FaMailBulk, FaShoppingBag, FaShoppingCart, FaStar, FaUsers, FaUtensilSpoon, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {

    const [isAdmin] = useAdmin();
    return (
        <div className="flex bg-[#F6F6F6]">
            <div className="w-64 bg-orange-400 min-h-screen">
                <div className="text-3xl ml-6 mt-10">
                <h1 className="font-bold">Bistro Boss</h1>
                <h1 className="font-semibold">Restaurant</h1>
                </div>
                <ul className="menu mt-10 text-lg">
                   {
                    isAdmin ? <>
                     <li><NavLink to={'/dashboard/adminHome'}><FaHome></FaHome>Admin Home</NavLink></li>
                    <li><NavLink to={'/dashboard/addItems'}><FaUtensils></FaUtensils> Add Items</NavLink></li>
                    <li><NavLink to={'/dashboard/manageItems'}><FaList></FaList> Manage Items</NavLink></li>
                    <li><NavLink to={'/dashboard/manageBookings'}><FaAd></FaAd> Manage Bookings</NavLink></li>
                    <li><NavLink to={'/dashboard/allUsers'}><FaUsers></FaUsers> All Users</NavLink></li>
                    </>
                    :
                    <>
                     <li><NavLink to={'/dashboard/userHome'}><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to={'/dashboard/reservation'}><FaCalendar></FaCalendar> Reservation</NavLink></li>
                    <li><NavLink to={'/dashboard/cart'}><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                    <li><NavLink to={'/dashboard/reviews'}><FaStar></FaStar>My Reviews</NavLink></li>
                    <li><NavLink to={'/dashboard/bookings'}><FaList></FaList>My Bookings</NavLink></li>
                    </>
                   }
                    
                    {/* Shared */}
                    <div className="divider"></div>
                    <li><NavLink to={'/'}><FaHouseUser></FaHouseUser> Home</NavLink></li>
                    <li><NavLink to={'/menu'}><FaList></FaList> Menu</NavLink></li>
                    <li><NavLink to={'/order/salad'}><FaShoppingBag></FaShoppingBag> Shop</NavLink></li>
                    <li><NavLink to={'/contact'}><FaMailBulk></FaMailBulk> Contact</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;