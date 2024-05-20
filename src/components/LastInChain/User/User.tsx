import React, { FC } from "react";
import { IUserProps } from "../../../models/IUserProps";
import styles from "../LastInChain.module.css";
import { Link } from "react-router-dom";
import { urls } from "../../../constants/urlFmJsonplaceholder";
import { onClickHandler } from "../../../logic/ChosenClickHandler/ChosenClickHandler";

interface IProps {
  user: IUserProps;
}

const User: FC<IProps> = ({ user }) => {
  return (
    <Link
      className={"link"}
      to={"userPosts"}
      state={urls.userPosts(user.id.toString())}
    >
      <div onClick={(e) => onClickHandler(e)} className={styles.card}>
        <p>User ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>User Email: {user.email}</p>
        <p>User Address:</p>
        <div>
          <p>Street: {user.address.street}</p>
          <p>Suite: {user.address.suite}</p>
          <p>City: {user.address.city}</p>
          <p>Zipcode: {user.address.zipcode}</p>
          <p>Geo:</p>
          <div>
            <p>lat: {user.address.geo.lat}</p>
            <p>lng: {user.address.geo.lng}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default User;
