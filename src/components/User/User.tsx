import React, { FC } from "react";
import styles from "./User.module.css";
import IUserProps from "../../models/IUserProps";
import { IUserChoice } from "../../models/IUserChoice";
import { NavLink } from "react-router-dom";

interface IUser {
  user: IUserProps;
  userChoice: IUserChoice;
}

const User: FC<IUser> = ({
  user,
  userChoice: { setChosenUser, chosenUser },
}) => {
  const onClickHandler = () => {
    document
      .querySelectorAll(".chosenUserDepending")
      .forEach((e) => e.classList.remove("notActive"));
    setChosenUser(user);
  };
  return (
    <NavLink
      to={"/userDetails"}
      className={[
        styles.userCard,
        chosenUser?.id === user.id ? "pressed" : "",
      ].join(" ")}
      onClick={onClickHandler}
      state={user}
    >
      <span>{user.id}</span>
      <span>{` - ${user.name} ${user.username}`}</span>
    </NavLink>
  );
};

export default User;
