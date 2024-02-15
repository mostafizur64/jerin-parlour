import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Route/route.jsx";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./page/Providers/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-[#f7e4e4] ">
      <AuthProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
        <ToastContainer />
      </AuthProvider>
    </div>
  </React.StrictMode>
);
