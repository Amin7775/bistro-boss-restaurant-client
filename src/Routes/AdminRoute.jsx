import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AdminRoute = ({children}) => {
    const [isAdmin,isAdminLoading] = useAdmin()
    const {user,loading}= useContext(AuthContext)
    const location = useLocation()

    if(isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if(isAdmin && user){
        return children
    }

    
    return <Navigate to={'/' } state={{from: location}} replace></Navigate>
};

export default AdminRoute;