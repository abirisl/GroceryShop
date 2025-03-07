import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ContactUs from "../pages/ContactUs";
import Products from "../pages/Products/Products";
import AboutUs from "../pages/AboutUs";
import BlogPage from "../pages/BlogPage";


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
      }
    ]
  },
]);
