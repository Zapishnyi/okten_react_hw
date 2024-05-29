import React, { FC, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import carsApi from "../../services/cars.api.service";
import { ICarProps } from "../../models/ICarProps";
import { useNavigate } from "react-router-dom";
import tokenService from "../../services/TokenService";

const CarAdd: FC = () => {
  console.log("add car");
  const formData = useRef<ICarProps>({ brand: "", year: 0, price: 0 });
  const {
    register,
    handleSubmit,
    // formState: { errors, isValid },
  } = useForm<ICarProps>({
    mode: "all",
  });
  const navigate = useNavigate();
  const createHandler = async (newCar: ICarProps) => {
    formData.current = newCar;
    return tokenService(carsApi.addCar, "/create", navigate, newCar).then(
      (value: any) => {
        navigate("cars/create");
        return value;
      },
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(createHandler)}>
        <label>
          Brand:
          <input
            type="text"
            defaultValue={formData.current.brand}
            {...register("brand")}
          />
        </label>{" "}
        <label>
          Price:
          <input
            type="number"
            defaultValue={formData.current.price}
            {...register("price")}
          />
        </label>{" "}
        <label>
          Year of build:
          <input
            type="number"
            defaultValue={formData.current.year}
            {...register("year")}
          />
        </label>{" "}
        {/*<label>*/}
        {/*  Photo link:*/}
        {/*  <input type="text" {...register("photo")} />*/}
        {/*</label>{" "}*/}
        <button>Create</button>
      </form>
    </div>
  );
};

export default CarAdd;
