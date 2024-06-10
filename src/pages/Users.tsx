import React, { FC } from "react";
import { useContextData } from "../contexts/ContextProvider";
import User from "../components/User";

const Users: FC = () => {
  console.log(".");
  return (
    <div className={"dataWrapper"}>
      {useContextData().allUsers?.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
