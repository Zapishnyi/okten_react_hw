import React, { FC, useEffect, useState } from "react";
import styles from "./UsersList.module.css";
import IUserProps from "../../models/IUserProps";
import { placeholderApi } from "../../services/usersPostsComents.api.service";
import User from "../../components/User/User";
import { IUserChoice } from "../../models/IUserChoice";
import { useOutletContext } from "react-router-dom";

const UsersList: FC = () => {
  const [users, setUsers] = useState<IUserProps[] | null>(null);

  useEffect(() => {
    placeholderApi.getAllUsers().then(({ data }) => setUsers(data));
  }, []);
  const userChoice: IUserChoice = useOutletContext();

  return (
    <div className={styles.usersWrapper}>
      {users &&
        users.map((user, index) => (
          <User key={index} user={user} userChoice={userChoice} />
        ))}
    </div>
  );
};

export default UsersList;
