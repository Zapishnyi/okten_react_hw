import React, { FC } from "react";
import IUser from "../../models/IUser";
import styles from "./UserPost.module.css";
import { useNavigate } from "react-router-dom";

interface IProps {
  user: IUser;
}

const User: FC<IProps> = ({ user: { id, name } }) => {
  console.log(".");
  const navigate = useNavigate();

  return (
    <div
      className={styles.card}
      onClick={() => {
        navigate(`/users/${id}`);
      }}
    >
      <p>
        User ID - {id}, Name - {name}
      </p>
    </div>
  );
};

export default User;
