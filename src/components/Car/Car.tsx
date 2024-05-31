import React, { FC, MouseEventHandler } from "react";
import ICar from "../../models/ICar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Car.module.css";
import { authServices } from "../../services/cars.api.cervice";
import {
  tokenAutoRefreshService,
  tokenRefreshTimer,
} from "../../services/TokenAutoRefreshService";

interface ICarProps {
  car: ICar;
}

const Car: FC<ICarProps> = ({ car }) => {
  const navigate = useNavigate();

  const buttonMark: MouseEventHandler<HTMLAnchorElement> = (e) => {
    document
      .querySelectorAll(".carLink")
      .forEach((e) => e.classList.remove("pressed"));
    const pressedLink = e.target as HTMLAnchorElement;
    pressedLink.classList.add("pressed");
  };

  const deleteHandle: MouseEventHandler<HTMLButtonElement> = async (e) => {
    try {
      await authServices.deleteCar(car.id).then(() => navigate("/cars"));
    } catch (err) {
      try {
        await tokenAutoRefreshService().then(() => deleteHandle(e));
      } catch {
        clearInterval(tokenRefreshTimer);
        navigate("/login");
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <p>Car ID: {car.id}</p>
      <p>Brand: {car.brand}</p>
      <p>Price: {car.price}</p>
      <p>Build year: {car.year}</p>
      <p>Photo: string {car.photo}</p>
      <Link
        onClick={buttonMark}
        to={"carFullUpdate"}
        className={"carLink"}
        state={car}
      >
        Overwrite
      </Link>
      <Link
        onClick={buttonMark}
        to={"carEdit"}
        className={"carLink"}
        state={car}
      >
        Edit
      </Link>
      <button onClick={deleteHandle}>Delete</button>
    </div>
  );
};

export default Car;
