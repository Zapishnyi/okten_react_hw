import React, { FC } from "react";
import IUserWithPosts from "../models/IUserWithPosts";
import { useAppDispatch } from "../redux/store";
import { setChosenUser } from "../redux/chosenUser/chosenUserState";
import { setChosenPost } from "../redux/chosenPost/chousenPostState";

interface IProps {
  user: IUserWithPosts;
}

const User: FC<IProps> = ({ user }) => {
  console.log(".");
  const dispatch = useAppDispatch();

  const choseUserHandler = () => {
    dispatch(setChosenUser(user));
    dispatch(setChosenPost(null));
  };
  return (
    <p className={"itemToChose user"} onClick={choseUserHandler}>
      {user.id} - {user.name}
    </p>
  );
};

export default User;
