import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

import { router } from "./router/routes";
import AuthProvider from "./Provider/AuthProvider";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);