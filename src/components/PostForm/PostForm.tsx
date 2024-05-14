import React from "react";
import styles from "./PostForm.module.css";
import { useForm } from "react-hook-form";
import { IPostProps } from "../../models/IPostProps";
import { getPosts, postUserPost } from "../../services/UserPostAdd.api.service";

const PostForm = () => {
  let postForm = useForm<IPostProps>();
  let { register, handleSubmit } = postForm;
  console.log(postForm);
  // handleSubmit(() => {});
  const handleSubmitCallback = (formData: IPostProps) => {
    console.log("in handler", formData);
    console.log("JSON", JSON.stringify(formData));
    postUserPost(formData).then((data) => {
      console.log("Axios response", data);
    });
  };

  const clickHandler = () => {
    getPosts().then((data) => {
      console.log("Axios response", data);
    });
  };

  return (
    <div>
      <form
        className={styles.form}
        onSubmit={handleSubmit(handleSubmitCallback)}
      >
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
      <button onClick={clickHandler}>Get posts</button>
    </div>
  );
};

export default PostForm;
