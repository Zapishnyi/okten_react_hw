import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Users from "../pages/Users";
import Posts from "../pages/Posts";
import UserDetails from "../pages/UserPostDetails/UserDetails";
import PostDetails from "../pages/UserPostDetails/PostDetails";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"users"} />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "users/:userId",
        element: <UserDetails />,
      },
      {
        path: "posts/:postId",
        element: <PostDetails />,
      },
    ],
  },
]);
