import React, { FC } from "react";

import IUserProps from "../../models/IUserProps";
import styles from "./User.module.css";

interface IUser {
  user: IUserProps;
  userDetails: (userId: number) => void;
}

const User: FC<IUser> = ({ user, userDetails }) => {
  return (
    <div className={styles.userName}>
      <p>
        {user.id} - {user.lastName} {user.firstName}
      </p>
      <button onClick={() => userDetails(user.id || 0)}>Get data</button>
    </div>
  );
};

export default User;
