import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import router from "./Route/Router";
import React from "react";
import "./index.css";
import AuthProvider from "./Providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
