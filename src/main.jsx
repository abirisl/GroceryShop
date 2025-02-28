import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css'
import { QueryClient, QueryClientProvider, useQuery, } from '@tanstack/react-query'

const queryClient = new QueryClient()

import { router } from "./router/routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);