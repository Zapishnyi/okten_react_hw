import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <div className={styles.headerWrapper}>
      <NavLink to={"register"}>Register</NavLink>
      <NavLink to={"login"}>Login</NavLink>

      <NavLink to={"cars"}>Cars</NavLink>
      <NavLink to={"me"}>Me</NavLink>
    </div>
  );
};

export default Header;
