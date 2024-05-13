import React from "react";
import styles from "./PostForm.module.css";

const PostForm = () => {
  return (
    <div>
      <form className={styles.form} action="">
        <label>
          Post title:
          <input type="text" />
        </label>
        <label>
          Post body:
          <input type="text" />
        </label>
        <label>
          User ID:
          <input type="text" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
