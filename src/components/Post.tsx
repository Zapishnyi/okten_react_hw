import React, { FC, memo } from "react";
import IPost from "../models/IPost";
import { useContextData } from "../contexts/ContextProvider";

interface IProps {
  post: IPost;
}

const Post: FC<IProps> = memo(({ post }) => {
  console.log(".");
  let setPost = useContextData().setPost;

  return (
    <div className={"itemToChose post"} onClick={() => setPost(post)}>
      <p>
        Post ID: {post.id}, User ID:{post.userId}, Title:{post.title}
      </p>
      <p className={"body"}>Post Body: {post.body}</p>
    </div>
  );
});

export default Post;
