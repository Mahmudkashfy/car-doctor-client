import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const  Navbar = () => {

  const { user, LogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    LogOut()
    .then(() =>{})
    .catch(error => console.log(error));
  };

  const navItems = (
    <>
    
      <li><Link className="rounded"  to='./'>Home</Link></li>
      <li><Link  className="rounded" to='./about'>About</Link></li>
      {/* <li><Link  className="rounded" to='./about'>Service</Link></li>
      <li><Link  className="rounded" to='./about'>Blog</Link></li> 
      <li><Link  className="rounded" to='./about'>Contact</Link></li> */}
      {
        user?.email?<>
        <li><Link  className="rounded" to='./bookings'>My Booking</Link></li>
        <li><button onClick={handleLogOut} className="rounded">Log out</button> </li>
        </>
        : <li><Link  className="rounded" to='./login'>Login</Link></li>
      }
    </>
  );
  return (
    <div className="navbar px-0 py-2 mb-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           {navItems}
          </ul>
        </div>
        <Link to="/">
          <img className="h-[50px]" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base font-semibold btn_g">
         {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline border-orange-500 text-orange-500 rounded md:text-base font-semibold">Appointment</a>
      </div>
    </div>
  );
};

export default Navbar;
