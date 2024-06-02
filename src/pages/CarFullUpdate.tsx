import React, { FC, useRef } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import CarManipulateForm from "../forms/CarManipulateForm";
import { tokenHandledServices } from "../services/cars.api.cervice";

const CarFullUpdate: FC = () => {
  console.log(".");
  const { state } = useLocation();

  return (
    <div>
      {state?.id && (
        <CarManipulateForm
          key={state.id}
          car={state}
          title={"Rewrite"}
          manipulateAction={tokenHandledServices.editCar}
          id={state.id}
        />
      )}
    </div>
  );
};

export default CarFullUpdate;
