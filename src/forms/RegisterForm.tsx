import React from "react";
import { useForm } from "react-hook-form";
import IUserCredentials from "../models/IUserCredentials";
import { publicServices } from "../services/cars.api.cervice";
import { useNavigate } from "react-router-dom";
import { joiResolver } from "@hookform/resolvers/joi";
import userValidator from "../validators/user.validator";

const RegisterForm = () => {
  console.log(".");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IUserCredentials>({
    mode: "all",
    resolver: joiResolver(userValidator),
  });

  const Register = async (formData: IUserCredentials) => {
    try {
      await publicServices
        .register(formData)
        .then((registeredUserInfo) => registeredUserInfo);
      navigate("/login", { state: formData });
    } catch (err) {
      //   todo error
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(Register)}>
        <label>
          Username:
          <input type="text" {...register("username")} />
          {errors.username && <p>{errors.username.message}</p>}
        </label>
        <label>
          Password:
          <input type="text" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
        </label>
        {/*<label>*/}
        {/*  Confirm password*/}
        {/*  <input type="text" autoComplete="on" {...register("rePassword")} />*/}
        {/*</label>*/}
        <button>Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
