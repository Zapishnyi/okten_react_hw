import React, { FC } from "react";
import IPostProps from "../../models/IPostProps";
import styles from "./Post.module.css";
import { NavLink } from "react-router-dom";
import { IUserChoice } from "../../models/IUserChoice";

interface IPost {
  post: IPostProps;
  userChoice: IUserChoice;
}

const Post: FC<IPost> = ({ post, userChoice: { setChosenPost } }) => {
  return (
    <NavLink
      className={styles.linkStyle}
      to={"/comments"}
      onClick={() => setChosenPost(post)}
      state={post}
    >
      <div className={styles.postWrapper}>
        <p>
          <span>User ID:</span> {post.userId}
        </p>
        <p>
          <span>Post ID:</span> {post.id};
        </p>
        <p>
          <span>Post Title:</span> {post.title}
        </p>
        <p>
          <span>Post body:</span> {post.body};
        </p>
      </div>
    </NavLink>
  );
};

export default Post;
