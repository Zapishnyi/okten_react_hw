import React, { FC } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import IChoiceExt from "../../models/IChoiceExt";

const Header: FC<IChoiceExt> = ({ userChoice: { chosenUser, chosenPost } }) => {
  return (
    <div className={styles.headerWrapper}>
      <NavLink to={"users"}>Users</NavLink>
      <NavLink
        className={"chosenUserDepending"}
        to={"userDetails"}
        state={chosenUser}
      >
        User Details
      </NavLink>
      <NavLink
        className={"chosenUserDepending"}
        to={"userPosts"}
        state={chosenUser}
      >
        User Posts
      </NavLink>
      <NavLink
        className={"chosenPostDepending"}
        to={"comments"}
        state={chosenPost}
      >
        Comments to User post
      </NavLink>
    </div>
  );
};

export default Header;
