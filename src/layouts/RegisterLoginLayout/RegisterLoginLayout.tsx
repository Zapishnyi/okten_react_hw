import React, { FC } from "react";
import HeaderLoginRegister from "../../components/Headers/HeaderLoginRegister";
import { Outlet } from "react-router-dom";
import styles from "../ChildrenLayouts.module.css";

const RegisterLoginLayout: FC = () => {
  console.log(".");
  return (
    <div className={styles.container}>
      <HeaderLoginRegister />
      <Outlet />
    </div>
  );
};

export default RegisterLoginLayout;
