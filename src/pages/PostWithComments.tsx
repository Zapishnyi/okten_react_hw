import React, { FC, useMemo } from "react";
import IPostWithComments from "../models/IPostWithComments";
import Post from "../components/Post";
import Comment from "../components/Comment";
import { useAppSelector } from "../redux/store";

const PostWithComments: FC = () => {
  console.log(".");
  const {
    Posts: { postsState },
    ChosenPost: { chosenPost },
    Comments: { commentsState },
  } = useAppSelector((store) => store);

  const checkProps = +JSON.stringify(chosenPost?.id);
  const chosenPostsComments: IPostWithComments[] = useMemo(() => {
    console.log("chosenPostsComments recalculated");
    return postsState
      .filter((post) => (chosenPost ? post.id === chosenPost.id : true))
      .map((post) => ({
        ...post,
        comments: commentsState.filter((comment) => comment.postId === post.id),
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
