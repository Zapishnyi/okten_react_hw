import React, { FC, ReactNode, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import carsApi from "../../services/cars.api.service";
import { IRegisterProps } from "../../models/IRegisterProps";
import styles from "./Auth.module.css";
import { AxiosError } from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { storage } from "../../services/localStorageService";

interface ILocation {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: IRegisterProps;
}

const LoginForm = () => {
  console.log("LoginForm");
  const [loginError, setLoginError] = useState<string | null>(null);
  const { register, handleSubmit } = useForm<IRegisterProps>({ mode: "all" });
  const navigate = useNavigate();

  const loginHandler = async (props: IRegisterProps) => {
    try {
      await carsApi.login(props).then(({ data }) => {
        storage.setAccessToken(data.access);
        storage.setRefreshToken(data.refresh);
        navigate(`/cars`);
      });
    } catch (error: any | AxiosError) {
      setLoginError(
        `${error.message} - server response:${error.response.data.detail}`,
      );
      console.log("error details", error.response.data.detail);
      console.log("error", error);
    }
  };
  const loginAccredited: ILocation = useLocation();
  let defaultValue;
  loginAccredited.state
    ? (defaultValue = loginAccredited.state)
    : (defaultValue = { username: "", password: "" });
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(loginHandler)} className={styles.form}>
        <label>
          Username:{" "}
          <input
            type="text"
            autoComplete="on"
            defaultValue={defaultValue.username}
            {...register("username")}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="text"
            autoComplete="on"
            defaultValue={defaultValue.password}
            {...register("password")}
          />
        </label>

        <button>Login</button>
      </form>
      {loginError && <p>{loginError}</p>}
    </div>
  );
};

export default LoginForm;
