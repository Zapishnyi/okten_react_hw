import React from "react";
import styles from "./PostForm.module.css";
import { useForm } from "react-hook-form";
import { IPostProps } from "../../models/IPostProps";

const PostForm = () => {
  let postForm = useForm<IPostProps>();
  let { register, handleSubmit } = postForm;
  console.log(postForm);
  // handleSubmit(() => {});
  const handleSubmitCallback = (formData: IPostProps) => {
    console.log(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleSubmitCallback)}>
      <label>
        User ID:
        <input type="number" {...register("userId")} />
      </label>
      <label>
        Post title:
        <input type="text" {...register("title")} />
      </label>
      <label>
        Post body:
        <textarea {...register("body")} />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default PostForm;
