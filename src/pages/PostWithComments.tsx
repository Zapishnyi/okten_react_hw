import React, { FC, useMemo } from "react";
import { dataStore } from "../stateManager/StateManager";
import IPostWithComments from "../models/IPostWithComments";
import Post from "../components/Post";
import Comment from "../components/Comment";

const PostWithComments: FC = () => {
  console.log(".");
  const { allPosts, allComments, chosenPost } = dataStore();

  const checkProps = +JSON.stringify(chosenPost?.id);
  const chosenPostsComments: IPostWithComments[] = useMemo(() => {
    console.log("chosenPostsComments recalculated");
    return allPosts
      .filter((post) => (chosenPost ? post.id === chosenPost.id : true))
      .map((post) => ({
        ...post,
        comments: allComments.filter((comment) => comment.postId === post.id),
      }));
  }, [checkProps]);

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
