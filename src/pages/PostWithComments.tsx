import React, { FC } from "react";
import { useContextData } from "../contexts/ContextProvider";
import IUserWithPosts from "../models/IUserWithPosts";
import IPostWithComments from "../models/IPostWithComments";
import User from "../components/User";
import Post from "../components/Post";
import Comment from "../components/Comment";

const PostWithComments: FC = () => {
  const { allPosts, allComments, chosenPost } = useContextData();

  const chosenPostsComments: IPostWithComments[] = allPosts
    .filter((post) => (chosenPost ? post.id === chosenPost.id : true))
    .map((post) => ({
      ...post,
      comments: allComments.filter((comment) => comment.postId === post.id),
    }));

  return (
    <div className={"postWithComment"}>
      {chosenPostsComments.map((postWithComments) => (
        <div key={postWithComments.id}>
          <Post key={postWithComments.id} post={postWithComments} />
          {postWithComments.comments?.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PostWithComments;
