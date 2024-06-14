import React, { FC } from "react";
import { useAppSelector } from "../../redux/store";
import IPost from "../../models/IPost";
import styles from "./UserPost.module.css";
import { useNavigate } from "react-router-dom";

interface IProps {
  post: IPost;
}

const Post: FC<IProps> = ({ post }) => {
  console.log(".");

  const { users } = useAppSelector((state) => state.StoreManipulate);

  const navigate = useNavigate();

  return (
    <div
      className={styles.card}
      onClick={() => {
        navigate(`/posts/${post.id}`);
      }}
    >
      <p>
        Post ID - {post.id}, User Name:{" "}
        {users.filter((e) => e.id === post.userId)[0].name},
      </p>
      <p>Post title : {post.title}</p>
    </div>
  );
};

export default Post;
