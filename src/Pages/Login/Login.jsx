import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const captchaRef = useRef(null);
  const {loginUser}= useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/'

  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(4);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    loginUser(email,password)
    .then(result => {
      const user = result.user;
      console.log(user)
      navigate(from, {replace: true})
    })
  };

  const handleValidateCaptcha = (e) => {
    console.log(captchaRef.current.value);
    const userCaptcha = captchaRef.current.value;

    if (validateCaptcha(userCaptcha)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
            <title>Bistro Boss | Sign up</title>
        </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
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
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  <LoadCanvasTemplate />
                </span>
              </label>
              <input
                type="text"
                ref={captchaRef}
                placeholder="Type The Captcha Above"
                className="input input-bordered"
                name="captcha"
                // required
              />
              <button
                onClick={handleValidateCaptcha}
                className="btn btn-outline btn-xs mt-3 border-gray-300"
              >
                Validate
              </button>
            </div>
            <div className="form-control mt-6">
              {/* disabled == true to enable captcha */}
              <button disabled={false} className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <p>New Here? <Link to={'/signup'}><span className="text-blue-400">Sign Up</span></Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
