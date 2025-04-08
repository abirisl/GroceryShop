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
import PrivateRoute from "../Routes/PrivateRoute";
import ProductDetails from "../pages/Products/ProductDetails";
import Nuts from "../pages/Products/AllNuts/Nuts";
import Nut from "../pages/Products/AllNuts/Nut";
import ErrorPage from "../components/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage/>,
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
        path: "/product",
        element: <Nuts />
      },
      {
        path: "/nuts/:nutId",
        element: <ProductDetails></ProductDetails>,
        loader: ()=> fetch('/nut.json')
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
         <PrivateRoute>
           <Dashboard />
         </PrivateRoute>
        
      }
    ]
  },
]);
