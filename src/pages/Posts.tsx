import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import Post from "../components/UserPost/Post";
import { PostsActions } from "../redux/PostsSlice/PostsSlice";

const Posts = () => {
  console.log(".");

  const { posts, postLoadingState } = useAppSelector(
    (state) => state.PostBundle,
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(PostsActions.loadPosts());
  }, []);

  return (
    <div>
      {postLoadingState && <p>Loading...</p>}
      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
