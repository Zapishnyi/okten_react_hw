import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useParams } from "react-router-dom";
import { StoreActions } from "../../redux/sliceBundle/sliceBundle";

const PostDetails: FC = () => {
  console.log(".");
  const dispatch = useAppDispatch();
  const { chosenPost, loadingState } = useAppSelector(
    (store) => store.StoreManipulate,
  );
  const { postId } = useParams();
  useEffect(() => {
    dispatch(StoreActions.setChosenPost(postId || "error"));
  }, [postId]);
  return (
    <div>
      {loadingState && <p>Loading...</p>}
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
