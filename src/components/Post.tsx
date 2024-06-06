import React, { FC } from "react";
import IPost from "../models/IPost";
import { dataStore } from "../stateManager/StateManager";

interface IProps {
  post: IPost;
}

const Post: FC<IProps> = ({ post }) => {
  const { setChosenPost } = dataStore();

  return (
    <div className={"itemToChose post"} onClick={() => setChosenPost(post)}>
      <p>
        Post ID: {post.id}, User ID:{post.userId}, Title:{post.title}
      </p>
      <p className={"body"}>Post Body: {post.body}</p>
    </div>
  );
};

export default Post;
