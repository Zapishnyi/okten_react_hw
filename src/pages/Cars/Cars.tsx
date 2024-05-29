import React, { FC, useEffect, useState } from "react";
import tokenService from "../../services/TokenService";
import carsApi from "../../services/cars.api.service";
import { ICarProps } from "../../models/ICarProps";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import Car from "../Car/Car";

const Cars: FC = () => {
  const trigger = useParams();
  console.log("cars");
  const navigate = useNavigate();
  const [cars, setCars] = useState<ICarProps[]>([]);
  useEffect(() => {
    tokenService(carsApi.getCars, "/cars", navigate).then((data) => {
      if (data && "prev" in data) {
        setCars(data.items);
      }
    });
  }, [trigger]);

  return (
    <div>
      <div>
        <NavLink to={"create"}>Create new car</NavLink>
        <div>
          {cars &&
            cars.map((car: ICarProps, index) => <Car key={index} car={car} />)}
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Cars;
