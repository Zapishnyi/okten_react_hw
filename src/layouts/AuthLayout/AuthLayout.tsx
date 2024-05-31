import React from "react";
import HeaderPublic from "../../components/Headers/HeaderPublic";
import { Outlet } from "react-router-dom";
import HeaderAuth from "../../components/Headers/HeaderAuth";
import styles from "../PublicAuthLayout.module.css";

const AuthLayout = () => {
  console.log(".");
  return (
    <div className={styles.container}>
      <HeaderAuth />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
