import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Users from "../pages/Users/Users";
import Posts from "../pages/Posts/Posts";
import Comments from "../pages/Comments/Comments";
import UserPosts from "../pages/UserPosts/UserPosts";
import CommentsToPost from "../pages/CommentsToPost/CommentsToPost";
import NewUserForm from "../pages/NewUserForm/NewUserForm";
import ErrorLayout from "../layout/ErrorLayout/ErrorLayout";
import NewPostForm from "../pages/NewPostForm/NewPostForm";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorLayout />,
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
            element: <UserPosts />,
          },
        ],
      },
      {
        path: "newUser",
        element: <NewUserForm />,
      },
      {
        path: "posts",
        element: <Posts />,
        children: [
          {
            path: "postComments",
            element: <CommentsToPost />,
          },
        ],
      },
      {
        path: "newPost",
        element: <NewPostForm />,
      },
      {
        path: "comments",
        element: <Comments />,
      },
    ],
  },
]);
