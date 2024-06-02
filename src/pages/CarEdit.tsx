import React, { FC, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import CarManipulateForm from "../forms/CarManipulateForm";
import { tokenHandledServices } from "../services/cars.api.cervice";

const CarEdit: FC = () => {
  console.log(".");
  const { state } = useLocation();

  return (
    <div>
      {state?.id && (
        <CarManipulateForm
          key={state.id}
          car={state}
          title={"Edit a car"}
          manipulateAction={tokenHandledServices.editCar}
          id={state.id}
        />
      )}
    </div>
  );
};

export default CarEdit;
