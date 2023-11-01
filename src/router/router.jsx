import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import AuthRoutes from "../pages/auth/routes";
import AppRoutes from "../pages/app/routes";
import HomeRoutes from "../pages/home/routes";

export const router = createBrowserRouter([
  HomeRoutes,
  AuthRoutes,
  AppRoutes,
  // {
  //   path: "*",
  //   element: <Navigate to="app" />,
  // }
])