import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { StoreActions } from "../redux/sliceBundle/sliceBundle";
import Post from "../components/UserPost/Post";

const Posts = () => {
  console.log(".");

  const { posts, loadingState } = useAppSelector(
    (state) => state.StoreManipulate,
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(StoreActions.loadPosts());
  }, []);

  return (
    <div>
      {loadingState && <p>Loading...</p>}
      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
