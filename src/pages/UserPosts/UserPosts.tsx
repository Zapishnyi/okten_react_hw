import React, { FC, useEffect, useState } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import { placeholderApi } from "../../services/usersPostsComents.api.service";
import { IUserChoice } from "../../models/IUserChoice";
import IPostProps from "../../models/IPostProps";
import Post from "../../components/Post/Post";
import styles from "./UserPosts.module.css";

const UserPosts: FC = () => {
  const location = useLocation();
  const userChoice: IUserChoice = useOutletContext();
  const [userPosts, setUserPosts] = useState<IPostProps[] | null>(null);

  useEffect(() => {
    if (location.state) {
      placeholderApi.getPostsOfUser(location.state.id).then(({ data }) => {
        setUserPosts(data);
      });
    }
  }, [location.state]);

  return (
    <div className={styles.postsWrapper}>
      {location.state ? (
        userPosts?.map((post, index) => (
          <Post key={index} post={post} userChoice={userChoice} />
        ))
      ) : (
        <p className={"noData"}>{"No data"}</p>
      )}
    </div>
  );
};

export default UserPosts;
