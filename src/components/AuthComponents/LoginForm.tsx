import React from "react";

const LoginForm = () => {
  return (
    <div>
      <p>Login Page</p>
      <form>
        <label>
          Username: <input type="text" />{" "}
        </label>
        <label>
          Password: <input type="text" />{" "}
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
