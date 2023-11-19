import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const SocialLogin = () => {
    const {googleLogin}=useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(res=>{
            const userInfo = {
                name: res.user.displayName,
                email: res.user.email
            }
            // console.log("Success", userInfo)
            axiosPublic.post('/users', userInfo)
        })
    }
  return (
    <div>
      {/* google */}
      <div>
        <button onClick={handleGoogleLogin} className="btn btn-primary">
          <FaGoogle></FaGoogle>
          Google 
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
