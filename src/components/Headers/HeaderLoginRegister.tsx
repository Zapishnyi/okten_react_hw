import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const HeaderLoginRegister = () => {
  console.log(".");
  return (
    <div className={styles.wrapper}>
      <NavLink to={"register"}>Register</NavLink>
      <NavLink to={"login"}>Login</NavLink>
    </div>
  );
};

export default HeaderLoginRegister;
