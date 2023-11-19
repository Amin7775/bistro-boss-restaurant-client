import { FaCalendar, FaHome, FaList, FaShoppingCart, FaStar } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 bg-orange-400 min-h-full">
                <ul className="menu">
                    <li><NavLink to={'/dashboard/userHome'}><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to={'/dashboard/reservation'}><FaCalendar></FaCalendar> Reservation</NavLink></li>
                    <li><NavLink to={'/dashboard/cart'}><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                    <li><NavLink to={'/dashboard/reviews'}><FaStar></FaStar>My Reviews</NavLink></li>
                    <li><NavLink to={'/dashboard/bookings'}><FaList></FaList>My Bookings</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;