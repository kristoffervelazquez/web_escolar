import React from "react";
import { Outlet } from "react-router-dom";

const AuthRoutes = {
  path: "auth",
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <div>auth</div>,
    },
    {
      path: "login",
      element: <div>login</div>,
    },
  ],
};


export default AuthRoutes;
