import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Users from "../pages/Users/Users";
import Posts from "../pages/Posts/Posts";
import Comments from "../pages/Comments/Comments";
import UserPosts from "../pages/UserPosts/UserPosts";
import CommentsToPost from "../pages/CommentsToPost/CommentsToPost";

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
        children: [
          {
            path: "userPosts",
            element: <Posts />,
          },
        ],
      },
      {
        path: "posts",
        element: <Posts />,
        children: [
          {
            path: "postComments",
            element: <Comments />,
          },
        ],
      },
      {
        path: "comments",
        element: <Comments />,
      },
    ],
  },
]);
