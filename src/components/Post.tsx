import React, { FC } from "react";
import IPost from "../models/IPost";
import { useAppDispatch } from "../redux/store";
import { setChosenPost } from "../redux/chosenPost/chousenPostState";

interface IProps {
  post: IPost;
}

const Post: FC<IProps> = ({ post }) => {
  console.log(".");
  const dispatch = useAppDispatch();

  return (
    <div
      className={"itemToChose post"}
      onClick={() => dispatch(setChosenPost(post))}
    >
      <p>
        Post ID: {post.id}, User ID:{post.userId}, Title:{post.title}
      </p>
      <p className={"body"}>Post Body: {post.body}</p>
    </div>
  );
};

export default Post;
