import { Outlet } from "react-router-dom";


const HomeRoutes = {
  path: "/",
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <div><h1>Home</h1></div>,
    },
  ],
}

export default HomeRoutes;