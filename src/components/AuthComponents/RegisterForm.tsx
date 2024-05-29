import React, { createContext, FC, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { IRegisterProps } from "../../models/IRegisterProps";
import { joiResolver } from "@hookform/resolvers/joi";
import userValidator from "../../validator/user.validator";
import carsApi from "../../services/cars.api.service";

import { ICreatedProps } from "../../models/ICreatedProps";
import styles from "./Auth.module.css";
import { AxiosError } from "axios";
import RegisterResponse from "../RegisterResponse/RegisterResponse";

export const CredentialsF = createContext<IRegisterProps>({
  username: "",
  password: "",
});

const RegisterForm: FC = () => {
  const [error, setError] = useState<string[] | null>(null);
  const [response, setResponse] = useState<ICreatedProps | null>(null);
  const [loginCredentials, setLoginCredentials] = useState<IRegisterProps>({
    username: "",
    password: "",
  });
  console.log("Register Form");

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IRegisterProps>({
    mode: "all",
    resolver: joiResolver(userValidator),
  });

  const handleSubmitCallback = async ({
    username,
    password,
  }: IRegisterProps) => {
    setError(null);
    setResponse(null);
    try {
      await carsApi.register({ username, password }).then(({ data }) => {
        setLoginCredentials({ username: username, password: password });
        setResponse(data);
      });
    } catch (submitError: any | AxiosError) {
      reset();
      submitError.isAxiosError
        ? setError(submitError.response.data.username)
        : console.log(submitError);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form
        onSubmit={handleSubmit(handleSubmitCallback)}
        className={styles.form}
      >
        <p>Register Form</p>
        <label>
          Login
          <input type="text" autoComplete="on" {...register("username")} />
          {errors.username && <p>{errors.username.message}</p>}
        </label>
        <label>
          Password
          <input type="text" autoComplete="on" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
        </label>
        <label>
          Confirm password
          <input type="text" autoComplete="on" {...register("rePassword")} />
          {errors.rePassword && <p>{errors.rePassword.message}</p>}
        </label>
        <button disabled={!isValid}>Submit</button>
      </form>
      <div>
        {error &&
          error.map((singleError, index) => <p key={index}>{singleError}</p>)}
        {response && (
          <div className={"objectWrapper"}>
            <CredentialsF.Provider value={loginCredentials}>
              <RegisterResponse response={response} />
            </CredentialsF.Provider>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
