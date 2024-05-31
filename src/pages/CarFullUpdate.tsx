import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import ICarToSend from "../models/ICarToSend";
import CarManipulateForm from "../forms/CarManipulateForm";

const CarFullUpdate: FC = () => {
  const car = useLocation();
  console.log(".");
  return <div>{/*<CarManipulateForm car={car} />*/}</div>;
};

export default CarFullUpdate;
