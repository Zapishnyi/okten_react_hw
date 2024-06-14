import React, { FC } from "react";
import { NavLink } from "react-router-dom";

const Header: FC = () => {
  console.log(".");
  return (
    <div>
      <ul>
        <li>
          <NavLink to={"users"}>Users</NavLink>
        </li>
        <li>
          <NavLink to={"posts"}>Posts</NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Header;
