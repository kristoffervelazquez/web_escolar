import { Outlet } from "react-router-dom";
import AppLayout from "../../layout/AppLayout";
import SubjectScreen from "./SubjectScreen";
import SequenceScreen from "./SequenceScreen";
import MailScreen from "./MailScreen";
import AppScreen from "./AppScreen";
import ShowMaterial from "../../shared/components/ShowMaterial";

const AppRoutes = {
  path: "app",
  element: <AppLayout><Outlet /></AppLayout>,
  children: [
    {
      path: "",
      element: <div><AppScreen/></div>,
    },
    {
      path: "subject/:id/activities",
      element: <SubjectScreen />
    },
    {
      path: "subject/:id/sequence",
      element: <SequenceScreen />
    },
    {
      path: "subject/:id/mail",
      element: <MailScreen/>
    },
    {
      path: "subject/:id/material",
      element: <ShowMaterial/>,
    },

  ],
}

export default AppRoutes;