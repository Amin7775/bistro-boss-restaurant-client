import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome/AdminHome";
import AddItems from "../Pages/Dashboard/Admin/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/Admin/ManageItems/ManageItems";
import ManageBookings from "../Pages/Dashboard/Admin/ManageBookings/ManageBookings";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            // {
            //     path: '/order',
            //     element: <Order></Order>
            // },
            {
                path: '/order/:id',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path:'/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
        children:[
            {
                path:'cart',
                element:<Cart></Cart>
            },
            {
                path:'userhome',
                element:<Cart></Cart>
            },
            {
                path:'reservation',
                element:<Cart></Cart>
            },
            {
                path:'reviews',
                element:<Cart></Cart>
            },
            {
                path:'bookings',
                element:<Cart></Cart>
            },
            {   
                // Admin Section
                path:'adminHome',
                element:<AdminHome></AdminHome>
            },
            {
                path:'addItems',
                element:<AddItems></AddItems>
            },
            {
                path:'manageItems',
                element:<ManageItems></ManageItems>
            },
            {
                path:'manageBookings',
                element:<ManageBookings></ManageBookings>
            },
            {
                path:'allUsers',
                element:<AllUsers></AllUsers>
            },
        ]
    }
])