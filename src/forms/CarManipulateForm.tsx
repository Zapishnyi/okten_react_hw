import React, { FC } from "react";
import { useForm } from "react-hook-form";
import ICarToSend from "../models/ICarToSend";
import { authServices, publicServices } from "../services/cars.api.cervice";
import { useNavigate } from "react-router-dom";
import {
  tokenAutoRefreshService,
  tokenRefreshTimer,
} from "../services/TokenAutoRefreshService";
import { joiResolver } from "@hookform/resolvers/joi";
import carValidator from "../validators/car.validator";

interface ICar {
  car?: ICarToSend | null;
}

const CarManipulateForm: FC<ICar> = (car?) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ICarToSend>({ mode: "all", resolver: joiResolver(carValidator) });

  const navigate = useNavigate();

  const carCreate = async (formData: ICarToSend) => {
    try {
      await authServices.createCar(formData).then(() => navigate("/cars"));
    } catch (err) {
      try {
        await tokenAutoRefreshService().then(() => carCreate(formData));
      } catch {
        console.log("Tokens refresh failed");
        clearInterval(tokenRefreshTimer);
        navigate("/login");
      }
    }
  };

  return (
    <div>
      <h3>Create a car</h3>
      <form onSubmit={handleSubmit(carCreate)}>
        <label>
          Car brand:
          <input type="text" {...register("brand")} />
          {errors.brand && <p>{errors.brand.message}</p>}
        </label>
        <label>
          {" "}
          Car price:
          <input type="text" {...register("price")} />
          {errors.price && <p>{errors.price.message}</p>}
        </label>
        <label>
          Year of build:
          <input type="text" {...register("year")} />
          {errors.year && <p>{errors.year.message}</p>}
        </label>

        <button>Save</button>
      </form>
    </div>
  );
};

export default CarManipulateForm;
