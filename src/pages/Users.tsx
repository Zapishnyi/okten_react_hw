import React, { FC } from "react";
import { dataStore } from "../stateManager/StateManager";
import User from "../components/User";

const Users: FC = () => {
  console.log(".");
  return (
    <div className={"dataWrapper"}>
      {dataStore().allUsers.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
