import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PublicLayout from "../hoc/PublicLayout/PublicLayout";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import AuthLayout from "../hoc/AuthLayout/AuthLayout";
import Cars from "../pages/Cars/Cars";

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
          },
        ],
      },
    ],
  },
]);
