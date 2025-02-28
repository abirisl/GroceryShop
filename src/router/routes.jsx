import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../Pages/Home";
import Register from "../pages/Register";
import Login from "../pages/login";
import ContactUs from "../pages/ContactUs";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayouts/>,
      children:[
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/contact",
          element: <ContactUs/>
      },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        }
      ]
    },
  ]);
  