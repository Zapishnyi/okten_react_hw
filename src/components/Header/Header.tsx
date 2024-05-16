import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"userDetails"}>User Details</NavLink>
      <NavLink to={"userPosts"}>User Posts</NavLink>
      <NavLink to={"Comments"}>Comments to User post</NavLink>
    </div>
  );
};

export default Header;
