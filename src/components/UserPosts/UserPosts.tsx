import React, { FC } from "react";
import IPostProps from "../../models/IPostProps";
import UserPost from "../UserPost/UserPost";
import styles from "./UserPosts.module.css";

type IUserPostsProps = { userPosts: IPostProps[] };
const UserPosts: FC<IUserPostsProps> = ({ userPosts }) => {
  console.log("user posts", userPosts);
  return (
    <div className={styles.userPosts}>
      <h3 className={styles.header}>User posts</h3>
      {userPosts.map((post) => (
        <UserPost userPost={post} />
      ))}
    </div>
  );
};

export default UserPosts;
