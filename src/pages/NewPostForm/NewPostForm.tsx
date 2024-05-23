import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { IPostAddProps } from "../../models/IPostAddProps";
import { placeHolderApi } from "../../services/usersPostsComments.api.service";
import styles from "../NewUserForm/NewUserForm.module.css";
import { joiResolver } from "@hookform/resolvers/joi";
import { postValidator } from "../../validators/post.validator";
import User from "../../components/LastInChain/User/User";
import Post from "../../components/LastInChain/Post/Post";
import { IPostProps } from "../../models/IPostProps";

const NewPostForm: FC = () => {
  let {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IPostAddProps>({
    mode: "all",
    resolver: joiResolver(postValidator),
  });
  const [postResponse, setPostResponse] = useState<IPostProps | null>(null);
  const submitCallBack = (e: IPostAddProps) => {
    placeHolderApi.addPost(e).then(({ data }) => {
      setPostResponse(data);
    });
  };
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(submitCallBack)} className={styles.form}>
        <label>
          User ID:
          <input type="text" {...register("userId")} />
          {errors.userId && <p> {errors.userId.message}</p>}
        </label>

        <label>
          Post title:
          <input type="text" {...register("title")} />
          {errors.title && <p> {errors.title.message}</p>}
        </label>

        <label>
          Post content:
          <textarea {...register("body")} />
          {errors.body && <p> {errors.body.message}</p>}
        </label>

        <button disabled={!isValid}>Submit</button>
      </form>
      {postResponse && <Post post={postResponse} />}
    </div>
  );
};

export default NewPostForm;
