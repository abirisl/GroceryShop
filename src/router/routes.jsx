import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import Products from "../pages/Products/Products";
import AboutUs from "../pages/AboutUs";
import BlogPage from "../pages/BlogPage";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Dashboard from "../pages/Dashboard/Dashboard";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contact",
        element: <ContactUs />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/aboutUs",
        element: <AboutUs />
      },
      {
        path: "/blogPage",
        element: <BlogPage />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/dashboard",
        element: 
          <Dashboard />
        
      }
    ]
  },
]);
