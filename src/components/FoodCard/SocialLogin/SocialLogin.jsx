import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleLogin}=useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(res=>{
            const userInfo = {
                name: res.user.displayName,
                email: res.user.email
            }
            // console.log("Success", userInfo)
            axiosPublic.post('/users', userInfo)
            .then(res=>{
              console.log(res.data)
              navigate('/')
            })
            .catch(error=>{
              console.log(error.message)
            })
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
