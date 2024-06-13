import React, { FC } from "react";
import User from "../components/User";
import { useAppSelector } from "../redux/store";

const Users: FC = () => {
  console.log(".");

  const { usersState } = useAppSelector((state) => state.Users);

  return (
    <div className={"dataWrapper"}>
      {usersState.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
