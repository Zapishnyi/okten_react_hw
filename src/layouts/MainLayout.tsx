import React, { FC, useEffect, useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import jsonAPI from "../services/json.api.servise";
import { WholeContext } from "../contexts/ContextProvider";
import IUser from "../models/IUser";
import IPost from "../models/IPost";
import IComment from "../models/IComment";
import IContextBundle from "../models/IContextBundle";

const MainLayout: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [comments, setComments] = useState<IComment[]>([]);
  const [chosenUser, setChosenUser] = useState<IUser | null>(null);
  const [chosenPost, setChosenPost] = useState<IPost | null>(null);

  useEffect(() => {
    jsonAPI.getUsers().then(({ data }) => {
      setUsers(data);
    });
    jsonAPI.getPosts().then(({ data }) => {
      setPosts(data);
    });
    jsonAPI.getComments().then(({ data }) => {
      setComments(data);
    });
  }, []);

  const providerValue: IContextBundle = {
    allUsers: users,
    allPosts: posts,
    allComments: comments,
    chosenUser: chosenUser,
    chosenPost: chosenPost,
    setUser: setChosenUser,
    setPost: setChosenPost,
  };

  return (
    <div className={"wrapper"}>
      <WholeContext.Provider value={providerValue}>
        <Header />
        <Outlet />
      </WholeContext.Provider>
    </div>
  );
};

export default MainLayout;
