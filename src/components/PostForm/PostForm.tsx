import React, { useState } from "react";
import styles from "./PostForm.module.css";
import { useForm } from "react-hook-form";
import { IPostProps } from "../../models/IPostProps";
import { postUserPost } from "../../services/UserPostAdd.api.service";
import { IPostResponse } from "../../models/IPostResponse";
import ServerResponseObj from "../ServerResponseObj/ServerResponseObj";
import { joiResolver } from "@hookform/resolvers/joi";
import { postValidator } from "../../validators/post.validator";

const PostForm = () => {
  const [serverResponse, setServerResponse] = useState<IPostResponse | null>(
    null,
  );

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPostProps>({
    mode: "all",
    resolver: joiResolver(postValidator),
  });

  const handleSubmitCallback = (formData: IPostProps) => {
    postUserPost(formData).then(({ data }) => {
      setServerResponse(data);
    });
  };

  return (
    <div className={styles.formWrapper}>
      <form
        className={styles.form}
        onSubmit={handleSubmit(handleSubmitCallback)}
      >
        <label>
          User ID:
          <input type="text" {...register("userId")} />
          {errors.userId && (
            <p className={styles.warning}>{errors.userId.message}</p>
          )}
        </label>
        <label>
          Post title:
          <input type="text" {...register("title")} />
          {errors.title && (
            <p className={styles.warning}>{errors.title.message}</p>
          )}
        </label>
        <label>
          Post body:
          <textarea {...register("body")} />
          {errors.body && (
            <p className={styles.warning}>{errors.body.message}</p>
          )}
        </label>
        <button>Submit</button>
      </form>
      {serverResponse && <ServerResponseObj serverResponse={serverResponse} />}
    </div>
  );
};

export default PostForm;
