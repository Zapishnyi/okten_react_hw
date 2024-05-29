import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PublicLayout from "../hoc/PublicLayout/PublicLayout";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import AuthLayout from "../hoc/AuthLayout/AuthLayout";
import Cars from "../pages/Cars/Cars";
import MeInfo from "../pages/Me/MeInfo";
import CarAdd from "../pages/CarAdd/CarAdd";
import CarFullUpdate from "../pages/CarFullUpdate/CarFullUpdate";
import CarPartialUpdate from "../pages/CarPartalUpdate/CarPartialUpdate";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Navigate to={"login"} state={{ username: "", password: "" }} />
        ),
      },
      {
        element: <PublicLayout />,
        children: [
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "register",
            element: <RegisterPage />,
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
                path: "create",
                element: <CarAdd />,
              },
              {
                path: "overwrite",
                element: <CarFullUpdate />,
              },
              {
                path: "update",
                element: <CarPartialUpdate />,
              },
            ],
          },
          {
            path: "me",
            element: <MeInfo />,
          },
        ],
      },
    ],
  },
]);
