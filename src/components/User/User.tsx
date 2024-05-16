import React, { FC } from "react";
import styles from "./User.module.css";
import { IUserProps } from "../../models/IUserProps";

const User: FC<{
  user: IUserProps;
}> = ({ user }) => {
  return (
    <div className={styles.userCard}>
      <span>{user.id}</span>
      <span>{` - ${user.name} ${user.username}`}</span>
    </div>
  );
};

export default User;
