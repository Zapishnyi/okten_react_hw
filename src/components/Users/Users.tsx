import React, { FC } from "react";

import IUserProps from "../../models/IUserProps";
import User from "../User/User";

import styles from "./Users.module.css";

interface IUsers {
  users: IUserProps[];
  skipChange: (buttonName: string, target: EventTarget) => void;
  userDetails: (userId: number) => void;
}

const Users: FC<IUsers> = ({ users, skipChange, userDetails }) => {
  return (
    <div className={styles.usersWrapper}>
      <button onClick={({ target }) => skipChange("prev", target)}>Prev</button>
      <div>
        {users.map((user, index) => (
          <User key={index} user={user} userDetails={userDetails} />
        ))}
      </div>
      <button onClick={({ target }) => skipChange("next", target)}>Next</button>
    </div>
  );
};

export default Users;
