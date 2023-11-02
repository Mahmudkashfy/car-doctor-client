import { useContext } from "react";
import login from "./../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Result } from "postcss";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const Navigate = useNavigate()

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((Result) => {
        const user = Result.user;
        console.log(user);
        Navigate(location?.state ? location?.state : '/');
      })
      .catch((error) => console.log(error));
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
              Sign Up
            </h1>
            <form onSubmit={handleSignup}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered rounded"
                  required
                />
              </div>
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
                  placeholder="Confirm Password"
                  className="input input-bordered rounded"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Signup" className="btn btn-neutral rounded" />
              </div>
            </form>
            <p className="my-4 text-center text-base">
              {" "}
              Already Have an Account?{" "}
              <Link to="/login" className="font-bold text-orange-600">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
