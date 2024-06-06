import React, { FC } from "react";
import IUserWithPosts from "../models/IUserWithPosts";
import { dataStore } from "../stateManager/StateManager";

interface IProps {
  user: IUserWithPosts;
}

const User: FC<IProps> = ({ user }) => {
  const { setChosenUser, setChosenPost } = dataStore();

  const choseUserHandler = () => {
    setChosenUser(user);
    setChosenPost(null);
  };
  return (
    <p className={"itemToChose user"} onClick={choseUserHandler}>
      {user.id} - {user.name}
    </p>
  );
};

export default User;
