import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ICarToSend from "../models/ICarToSend";
import { tokenHandledServices } from "../services/cars.api.cervice";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  tokenAutoRefreshService,
  tokenRefreshTimer,
} from "../services/TokenAutoRefreshService";
import { joiResolver } from "@hookform/resolvers/joi";
import carValidator from "../validators/car.validator";
import { AxiosResponse } from "axios";
import ICar from "../models/ICar";

interface IManipulate {
  car: ICarToSend | null;
  title: string;
  manipulateAction: (
    formData: ICarToSend,
    id: number,
  ) => Promise<AxiosResponse<ICar>>;
  id: number;
}

const CarManipulateForm: FC<IManipulate> = ({
  title,
  car,
  manipulateAction,
  id,
}) => {
  console.log(".");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ICarToSend>({
    mode: "all",
    resolver: joiResolver(carValidator),
    defaultValues: { year: car?.year, price: car?.price, brand: car?.brand },
  });

  const carManipulate = async (formData: ICarToSend) => {
    try {
      await manipulateAction(formData, id).then(() => navigate("/cars"));
    } catch {
      try {
        await tokenAutoRefreshService().then(() => carManipulate(formData));
      } catch {
        console.log("Tokens refresh failed");
        clearInterval(tokenRefreshTimer);
        navigate("/login");
      }
    }
  };

  return (
    <div>
      <h3>{title}</h3>
      <form onSubmit={handleSubmit(carManipulate)}>
        <label>
          Car brand:
          <input type="text" autoComplete={"on"} {...register("brand")} />
          {errors.brand && <p>{errors.brand.message}</p>}
        </label>
        <label>
          Car price:
          <input type="text" autoComplete={"on"} {...register("price")} />
          {errors.price && <p>{errors.price.message}</p>}
        </label>
        <label>
          Year of build:
          <input type="text" autoComplete={"on"} {...register("year")} />
          {errors.year && <p>{errors.year.message}</p>}
        </label>

        <button disabled={!isValid}>Save</button>
      </form>
    </div>
  );
};

export default CarManipulateForm;
