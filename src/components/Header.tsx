import React, { FC, memo } from "react";
import { NavLink } from "react-router-dom";
import { dataStore } from "../stateManager/StateManager";

const Header: FC = memo(() => {
  console.log(".");
  const { chosenUser, chosenPost, setChosenUser, setChosenPost } = dataStore();

  const clearSelectionHandle = () => {
    document.querySelector(".active")?.classList.remove("active");
    setChosenUser(null);
    setChosenPost(null);
  };

  return (
    <div className={"header"}>
      <ul>
        <li>
          <NavLink to={"users"}>Users</NavLink>
        </li>
        <li>
          <NavLink to={"posts"}>Posts</NavLink>
        </li>
        <li>
          <NavLink to={"comments"}>Comments</NavLink>
        </li>
        <li>
          <NavLink to={"users&posts"}> Users and posts</NavLink>
        </li>
        <li>
          <NavLink to={"posts&comments"}>Posts and comments</NavLink>
        </li>
        <li onClick={clearSelectionHandle}>Clear selection</li>
      </ul>
      <div>
        <h3>Chosen user information</h3>
        <p>
          User:{chosenUser?.id} {chosenUser?.name}{" "}
        </p>
        <p>
          Post:{chosenPost?.id} {chosenPost?.title}
        </p>
      </div>
    </div>
  );
});

export default Header;
