import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useParams } from "react-router-dom";
import { PostsActions } from "../../redux/PostsSlice/PostsSlice";

const PostDetails: FC = () => {
  console.log(".");
  const dispatch = useAppDispatch();
  const { chosenPost, postLoadingState } = useAppSelector(
    (store) => store.PostBundle,
  );
  const { postId } = useParams();
  useEffect(() => {
    postId
      ? dispatch(PostsActions.setChosenPost(postId))
      : console.log("no postId given");
  }, [postId]);
  return (
    <div>
      {postLoadingState && <p>Loading...</p>}
      <div>
        {chosenPost && (
          <div>
            <p>User ID: {chosenPost.userId}</p>
            <p>Post ID: {chosenPost.id}</p>
            <p>Post title: {chosenPost.title}</p>
            <p>Post body: {chosenPost.body}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDetails;
