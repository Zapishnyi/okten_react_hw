import React, { FC } from "react";
import IUserWithPosts from "../models/IUserWithPosts";
import { useContextData } from "../contexts/ContextProvider";

interface IProps {
  user: IUserWithPosts;
}

const User: FC<IProps> = ({ user }) => {
  let setUser = useContextData().setUser;
  let setPost = useContextData().setPost;
  const choseUserHandler = () => {
    setUser(user);
    setPost(null);
  };
  return (
    <p className={"itemToChose user"} onClick={choseUserHandler}>
      {user.id} - {user.name}
    </p>
  );
};

export default User;
