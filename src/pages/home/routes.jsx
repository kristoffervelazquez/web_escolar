import { Outlet } from "react-router-dom";
import LandingPage from "./LandingPage";


const HomeRoutes = {
  path: "/",
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <LandingPage />,
    },
  ],
}

export default HomeRoutes;