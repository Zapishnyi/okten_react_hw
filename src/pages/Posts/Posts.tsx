import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { IPostProps } from "../../models/IPostProps";
import { placeHolderApi } from "../../services/usersPostsComments.api.service";
import Post from "../../components/LastInChain/Post/Post";
import styles from "./Posts.module.css";

const Posts = () => {
  const location = useLocation();
  console.log("Posts location", location.state);
  const [posts, setPosts] = useState<IPostProps[] | null>(null);
  useEffect(() => {
    placeHolderApi.getPosts(location.state).then(({ data }) => {
      setPosts(data);
    });
  }, [location]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.postsWrapper}>
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </div>
      <div className={["noLink", styles.outlet].join(" ")}>
        <Outlet />
      </div>
    </div>
  );
};

export default Posts;
