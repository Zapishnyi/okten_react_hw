import React, { FC } from "react";
import { ICarProps } from "../../models/ICarProps";
import { NavLink } from "react-router-dom";

interface IProps {
  car: ICarProps;
}

const Car: FC<IProps> = ({ car: { id, photo, brand, price, year } }) => {
  return (
    <div>
      <p>Car ID: {id}</p>
      <p>Brand: {brand}</p>
      <p>Price: {price}</p>
      <p>Build year: {year}</p>
      <p>Photo: string {photo}</p>
      <NavLink to={"overwrite"}>Overwrite</NavLink>
      <NavLink to={"update"}>Overwrite</NavLink>
    </div>
  );
};

export default Car;
