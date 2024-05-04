import React, { FC } from "react";
import IPostProps from "../../models/IPostProps";
import UserPost from "../UserPost/UserPost";
import styles from "./UserPosts.module.css";

type IUserPostsProps = { userPosts: IPostProps[] };
const UserPosts: FC<IUserPostsProps> = ({ userPosts }) => {
  return (
    <div className={styles.userPosts}>
      <h3 className={styles.header}>User posts</h3>
      {userPosts.map((post, index) => (
        <UserPost key={index} userPost={post} />
      ))}
    </div>
  );
};

export default UserPosts;
