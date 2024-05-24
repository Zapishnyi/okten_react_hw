import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { IAuthProps } from "../../models/IAuthProps";
import { joiResolver } from "@hookform/resolvers/joi";
import userValidator from "../../validator/user.validator";
import { carsApi } from "../../services/cars.api.service";
import { AxiosError } from "axios";
import { holderApi } from "../../services/holder.api.service";
import { ICreatedProps } from "../../models/ICreatedProps";
import styles from "./Auth.module.css";

const RegisterForm: FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<ICreatedProps | null | any>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IAuthProps>({
    mode: "all",
    resolver: joiResolver(userValidator),
  });

  const handleSubmitCallback = async ({ username, password }: IAuthProps) => {
    try {
      await carsApi
        .register({ username, password })
        .then((response) => setResponse({ response }));
    } catch (error: any) {
      console.log("register error", error);
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
          <input type="text" {...register("username")} />
          {errors.username && <p>{errors.username.message}</p>}
        </label>
        <label>
          Password
          <input type="text" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
        </label>
        <label>
          Confirm password
          <input type="text" {...register("rePassword")} />
          {errors.rePassword && <p>{errors.rePassword.message}</p>}
        </label>
        <button disabled={!isValid}>Submit</button>
      </form>
      <div>
        {error && <p>{error}</p>}
        {response && <p>{response}</p>}
      </div>
    </div>
  );
};

export default RegisterForm;
