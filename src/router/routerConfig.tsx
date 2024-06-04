import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Users from "../pages/Users";
import Posts from "../pages/Posts";
import PostWithComments from "../pages/PostWithComments";
import Comments from "../pages/Comments";
import UsersWithPosts from "../pages/UsersWithPosts";

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
        path: "comments",
        element: <Comments />,
      },
      {
        path: "users&posts",
        element: <UsersWithPosts />,
      },
      {
        path: "posts&comments",
        element: <PostWithComments />,
      },
    ],
  },
]);
