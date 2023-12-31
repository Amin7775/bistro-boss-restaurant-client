import { useEffect, useState } from "react";
import { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  //Manage users
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      
      if(currentUser){
        // insert token if new user logs in 
        const userInfo = {email : currentUser.email}
        axiosPublic.post('/jwt', userInfo)
        .then(res=> {
          if(res.data.token){
            localStorage.setItem('access-token', res.data.token)
          }
        })
      }else{
        //remove token
        localStorage.removeItem('access-token')
      }
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  //createUser
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //loginUser
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logoutUser
  const logoutUser = () =>{
    setLoading(true)
    return signOut(auth)
  }

  //update User
  const updateUser = (displayName,PhotoUrl) =>{
    setLoading(true)
    return updateProfile(auth.currentUser,{
      displayName: displayName,
      photoURL : PhotoUrl
    })
  }

  //google login/signup
  const googleLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth,provider)
  }

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    loginUser,
    logoutUser,
    updateUser,
    googleLogin
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
