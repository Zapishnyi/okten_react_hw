import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Users from "../pages/Users";
import Posts from "../pages/Posts";
import UserDetails from "../pages/UserDetails";
import Post from "../components/Post";
import PostDetails from "../pages/PostDetails";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "users/:id",
        element: <UserDetails />,
      },
      {
        path: "posts/:id",
        element: <PostDetails />,
      },
    ],
  },
]);
