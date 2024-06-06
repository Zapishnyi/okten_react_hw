import React, { FC, useMemo } from "react";
import { dataStore } from "../stateManager/StateManager";
import IPostWithComments from "../models/IPostWithComments";
import Post from "../components/Post";
import Comment from "../components/Comment";

const PostWithComments: FC = () => {
  const { allPosts, allComments, chosenPost } = dataStore();

  const chosenPostsComments: IPostWithComments[] = useMemo(() => {
    return allPosts
      .filter((post) => (chosenPost ? post.id === chosenPost.id : true))
      .map((post) => ({
        ...post,
        comments: allComments.filter((comment) => comment.postId === post.id),
      }));
  }, [chosenPost]);

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
