import React, { FC } from "react";
import IPostProps from "../../models/IPostProps";
import styles from "./Post.module.css";
import { NavLink } from "react-router-dom";
import { IUserChoice } from "../../models/IUserChoice";

interface IPost {
  post: IPostProps;
  userChoice: IUserChoice;
}

const Post: FC<IPost> = ({
  post,
  userChoice: { setChosenPost, chosenPost },
}) => {
  const onClickHandler = () => {
    document
      .querySelectorAll(".chosenPostDepending")
      .forEach((e) => e.classList.remove("notActive"));
    setChosenPost(post);
  };
  return (
    <NavLink
      className={styles.linkStyle}
      to={"/comments"}
      onClick={onClickHandler}
      state={post}
    >
      <div
        className={[
          styles.postWrapper,
          chosenPost?.id === post.id ? "pressed" : "",
        ].join(" ")}
      >
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
