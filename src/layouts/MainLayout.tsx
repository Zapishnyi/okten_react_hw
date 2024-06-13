import React, { FC, useEffect } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../redux/store";
import { UsersActions } from "../redux/usersState/usersState";
import { PostsActions } from "../redux/postsState/postsState";
import { CommentsActions } from "../redux/commentsState/commentsState";

const MainLayout: FC = () => {
  console.log(".");
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(UsersActions.loadUsers());
    dispatch(PostsActions.loadPosts());
    dispatch(CommentsActions.loadComments());
  }, []);

  return (
    <div className={"wrapper"}>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
