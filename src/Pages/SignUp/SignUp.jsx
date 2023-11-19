import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { createUser ,updateUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.photoUrl)
    const userInfo = {
      email: data.email,
      name: data.name
    }
    createUser(data.email, data.password)
    .then(res=> {
        const user = res.user
        console.log(user)
        updateUser(data.name,data.photoUrl)
        .then(()=>{
          axiosPublic.post('/users', userInfo)
          .then(res=>{
            if(res.data.insertedId){
              console.log("SignUp Success", res.data)
            }
          })
          reset()
        })
    })
    .catch(error=> {
        console.log(error.message)
    })
  }

  // const handleSignUp = (e) => {
  //     e.preventDefault();
  //     const form = e.target;
  //     const email = form.email.value;
  //     const password = form.password.value;

  //     console.log(email, password);
  //     createUser(email,password)
  //     .then(result => {
  //       const user = result.user;
  //       console.log(user)
  //     })
  //   };
  
  return (
    <div className="hero min-h-screen bg-base-200">
        <Helmet>
            <title>Bistro Boss | Sign up</title>
        </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                name="name"
                {...register("name",{ required: true })}
                />
                {errors.name && <span>Name is required</span>}
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text">photoUrl</span>
              </label>
              <input
                type="text"
                placeholder="photoUrl"
                className="input input-bordered"
                name="photoUrl"
                {...register("photoUrl",{ required: true })}
                />
                {errors.photoUrl && <span>photoUrl is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                {...register("email",{ required: true })}
                
              />
              {errors.email && <span>Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                {...register("password",{ required: true , minLength: 6, maxLength:20,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/})}
                
              />
              {errors.password?.type==='required' && <span>Password is required</span>}
              {errors.password?.type==='minLength' && <span>Password must be at least 6 characters</span>}
              {errors.password?.type==='maxLength' && <span>Password must be less than 20 characters</span>}
              {errors.password?.type==='pattern' && 'Password must have at least 1 uppercase , 1 lowercase , 1 digit and 1 special character'}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value={'Sign Up'}/>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
