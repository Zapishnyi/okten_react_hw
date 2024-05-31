import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const HeaderAuth = () => {
  console.log(".");
  return (
    <div className={styles.wrapper}>
      <NavLink to={"cars"}>Cars</NavLink>
      <NavLink to={"me"}>User information</NavLink>
      <NavLink to={"logout"}>Logout</NavLink>
    </div>
  );
};

export default HeaderAuth;
