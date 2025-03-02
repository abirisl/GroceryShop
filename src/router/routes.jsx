import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../../src/pages/Home";
import Register from "../../src/pages/Register";
import Login from "../../src/pages/login";
import ContactUs from "../../src/pages/ContactUs";


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
  