import React, { FC } from "react";
import HeaderPublic from "../../components/Headers/HeaderPublic";
import { Outlet } from "react-router-dom";
import styles from "../PublicAuthLayout.module.css";

const PublicLayout: FC = () => {
  console.log(".");
  return (
    <div className={styles.container}>
      <HeaderPublic />
      <Outlet />
    </div>
  );
};

export default PublicLayout;
