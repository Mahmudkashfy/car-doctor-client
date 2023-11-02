import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Root from '../Layout/Root';
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "../Providers/PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <Signup/>
      },
      {
        path: '/checkout/:id',
        element: <PrivateRoute><CheckOut/></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/bookings',
        element: <PrivateRoute><Bookings/></PrivateRoute>
      }
    ],
  },
]);

export default router;

















// "Create JSX Component": {
//   "prefix": ["jsxcomp","com"],
//   "body": [
//     "const ${TM_FILENAME_BASE}$1 = () => {",
    
//   "\treturn(",
//   "\t\t<div>",  
//   "\t\t\t <p> HELLO I Am ${TM_FILENAME_BASE} </p>" ,
//   "\t\t</div>",
//   "\t)}",
//     "export default ${TM_FILENAME_BASE}$1;"
//   ],
//   "description": "Create a JSX component template with filename as function name"
// }
