import React from "react";

import CarManipulateForm from "../forms/CarManipulateForm";
import ICarToSend from "../models/ICarToSend";
import { tokenHandledServices } from "../services/cars.api.cervice";

const CarCreate = () => {
  console.log(".");
  const car: ICarToSend = {
    brand: "",
    price: null,
    year: null,
  };

  const manipulateAction = tokenHandledServices.createCar;

  return (
    <div>
      <CarManipulateForm
        title={"Create a car"}
        car={car}
        manipulateAction={manipulateAction}
        id={1}
      />
    </div>
  );
};

export default CarCreate;
