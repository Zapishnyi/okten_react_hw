import React, { useEffect, useState } from "react";
import { authServices } from "../../services/cars.api.cervice";
import ICar from "../../models/ICar";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  tokenAutoRefreshService,
  tokenRefreshTimer,
} from "../../services/TokenAutoRefreshService";
import styles from "./Cars.module.css";
import Car from "../../components/Car/Car";

const Cars = () => {
  console.log(".");
  const navigate = useNavigate();
  const trigger = useLocation();
  const [cars, setCars] = useState<ICar[]>([]);

  const clearMarks = () => {
    document
      .querySelectorAll(".carLink")
      .forEach((e) => e.classList.remove("pressed"));
  };

  useEffect(() => {
    const getCarsWrapper = async () => {
      try {
        await authServices
          .getCars()
          .then(({ data: { items } }) => setCars(items));
      } catch {
        try {
          await tokenAutoRefreshService();
          await getCarsWrapper();
        } catch {
          clearInterval(tokenRefreshTimer);
          navigate("/login");
        }
      }
    };
    getCarsWrapper();
  }, [trigger]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.cars}>
        <NavLink to={"carAdd"} onClick={clearMarks}>
          Create a car
        </NavLink>
        <div>{cars && cars.map((car) => <Car key={car.id} car={car} />)}</div>
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default Cars;
