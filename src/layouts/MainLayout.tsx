import React, { FC, useEffect } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import jsonAPI from "../services/json.api.servise";
import { dataStore } from "../stateManager/StateManager";

const MainLayout: FC = () => {
  console.log(".");
  const { setAllUsers, setAllPosts, setAllComments } = dataStore();

  useEffect(() => {
    jsonAPI.getUsers().then(({ data }) => {
      setAllUsers(data);
    });
    jsonAPI.getPosts().then(({ data }) => {
      setAllPosts(data);
    });
    jsonAPI.getComments().then(({ data }) => {
      setAllComments(data);
    });
  }, []);

  return (
    <div className={"wrapper"}>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
