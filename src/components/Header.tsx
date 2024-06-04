import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { useContextData } from "../contexts/ContextProvider";
import IUserWithPosts from "../models/IUserWithPosts";

const Header: FC = () => {
  const user = useContextData().chosenUser;
  const post = useContextData().chosenPost;
  const choseUser = useContextData().setUser;
  const chosePost = useContextData().setPost;

  const clearSelectionHandle = () => {
    document.querySelector(".active")?.classList.remove("active");
    choseUser(null);
    chosePost(null);
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
          User:{user?.id} {user?.name}{" "}
        </p>
        <p>
          Post:{post?.id} {post?.title}
        </p>
      </div>
    </div>
  );
};

export default Header;
