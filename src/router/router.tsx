import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import React from "react";
import UserDetails from "../pages/UserDetails/UserDetails";
import UserPosts from "../pages/UserPosts/UserPosts";
import Comments from "../pages/Comments/Comments";
import UsersList from "../pages/UsersList/UsersList";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <UsersList />,
      },
      {
        path: "userDetails",
        element: <UserDetails />,
      },
      {
        path: "userPosts",
        element: <UserPosts />,
      },
      {
        path: "comments",
        element: <Comments />,
      },
    ],
  },
]);
