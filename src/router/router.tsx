import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import TokenHandledLayout from "../layouts/TokenHandledLayout/TokenHandledLayout";
import RegisterLoginLayout from "../layouts/RegisterLoginLayout/RegisterLoginLayout";
import Cars from "../pages/Cars/Cars";

import LogOut from "../pages/LogOut";
import UserInfo from "../pages/UserInfo/UserInfo";
import CarCreate from "../pages/CarCreate";
import CarFullUpdate from "../pages/CarFullUpdate";
import CarEdit from "../pages/CarEdit";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"login"} />,
      },
      {
        element: <RegisterLoginLayout />,
        children: [
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
      {
        element: <TokenHandledLayout />,
        children: [
          {
            path: "cars",
            element: <Cars />,
            children: [
              {
                path: "carAdd",
                element: <CarCreate />,
              },
              {
                path: "carFullUpdate",
                element: <CarFullUpdate />,
              },
              {
                path: "carEdit",
                element: <CarEdit />,
              },
            ],
          },
          {
            path: "me",
            element: <UserInfo />,
          },
          {
            path: "logout",
            element: <LogOut />,
          },
        ],
      },
    ],
  },
]);
