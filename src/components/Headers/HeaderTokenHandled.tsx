import React, { FC, useState } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

interface IProps {
  currentPage: string;
}

const HeaderTokenHandled: FC<IProps> = ({ currentPage }) => {
  console.log(".");

  return (
    <div className={styles.wrapper}>
      <NavLink to={`cars?page=${currentPage}`} state={"setPageWrapper"}>
        Cars
      </NavLink>
      <NavLink to={"me"}>Me</NavLink>
      <NavLink to={"logout"}>Logout</NavLink>
    </div>
  );
};

export default HeaderTokenHandled;
