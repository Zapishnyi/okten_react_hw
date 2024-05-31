import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import PublicLayout from "../layouts/PublicLayout/PublicLayout";
import Cars from "../pages/Cars/Cars";

import LogOut from "../pages/LogOut";
import UserInfo from "../pages/UserInfo";
import CarCreate from "../pages/CarCreate";
import CarFullUpdate from "../pages/CarFullUpdate";
import CarEdit from "../pages/CarEdit";
import CarDelete from "../pages/CarDelete";

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
        element: <PublicLayout />,
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
        element: <AuthLayout />,
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
              {
                path: "delete",
                element: <CarDelete />,
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
