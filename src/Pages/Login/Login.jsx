import { Link } from "react-router-dom";
import login from "./../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((Result) => {
        const user = Result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-10 border-0">
      <div className="hero-content flex-col md:flex-row shadow justify-around">
        <div className="md:w-1/2">
          <img src={login} alt="" className="object-contain" />
        </div>
        <div className=" md:w-1/2 rounded card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 ">
          <div className="card-body">
            <h1 className="text-2xl md:text-5xl font-bold text-center">
              Login
            </h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered rounded"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  className="input input-bordered rounded"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral rounded">Login</button>
              </div>
            </form>
            <p className="my-4 text-center text-base">
              {" "}
              New to Car Doctors? Please{" "}
              <Link to="/Signup" className="font-bold text-orange-600">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
