import React, { FC } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
  console.log(".");

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
