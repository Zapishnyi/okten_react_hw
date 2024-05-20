import React, { FC, useEffect, useState } from "react";
import { IUserProps } from "../../models/IUserProps";
import { placeHolderApi } from "../../services/usersPostsComments.api.service";
import User from "../../components/LastInChain/User/User";
import { Outlet } from "react-router-dom";
import styles from "./Users.module.css";

const Users: FC = () => {
  const [users, setUsers] = useState<IUserProps[] | null>(null);
  useEffect(() => {
    placeHolderApi.getAllUsers().then(({ data }) => {
      setUsers(data);
    });
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.usersWrapper}>
        {users && users.map((user) => <User key={user.id} user={user} />)}
      </div>
      <div className={["noLink", styles.outlet].join(" ")}>
        <Outlet />
      </div>
    </div>
  );
};

export default Users;
