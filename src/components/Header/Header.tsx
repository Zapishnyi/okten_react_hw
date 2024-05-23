import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { urls } from "../../constants/urlFmJsonplaceholder";

const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink to={"users"}>Users</NavLink>
      <NavLink to={"newUser"}>Add new User</NavLink>

      <NavLink to={"posts"} state={urls.posts}>
        Posts
      </NavLink>
      <NavLink to={"newPost"}>Add Post</NavLink>
      <NavLink to={"comments"} state={urls.comments}>
        Comments
      </NavLink>
    </div>
  );
};

export default Header;
