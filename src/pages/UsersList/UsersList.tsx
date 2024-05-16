import React, { FC, useEffect, useState } from "react";
import styles from "./UsersList.module.css";
import IUserProps from "../../models/IUserProps";
import { placeholderApi } from "../../services/usersPostsComents.api.service";
import User from "../../components/User/User";
import { IUserChoice } from "../../models/IUserChoice";
import { NavLink } from "react-router-dom";

interface IProps {
  userChoice: { userChoice: IUserChoice };
}

const UsersList: FC = () => {
  const [users, setUsers] = useState<IUserProps[] | null>(null);

  useEffect(() => {
    placeholderApi.getAllUsers().then(({ data }) => setUsers(data));
  }, []);

  return (
    <div className={styles.usersWrapper}>
      {users &&
        users.map((user, index) => (
          <NavLink to={"userDetails"} state={user} key={index}>
            <User user={user} />
          </NavLink>
        ))}
    </div>
  );
};

export default UsersList;
