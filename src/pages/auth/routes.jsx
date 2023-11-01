import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import LoginScreen from "./LoginScreen";

const AuthRoutes = {
  path: "auth",
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <Navigate to="auth/login" />,
    },
    {
      path: "login",
      element: <LoginScreen/>,
    },
  ],
};


export default AuthRoutes;
