import React, { createContext, FC, MouseEventHandler, useContext } from "react";
import ICar from "../../models/ICar";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Car.module.css";
import { tokenHandledServices } from "../../services/cars.api.cervice";
import {
  tokenAutoRefreshService,
  tokenRefreshTimer,
} from "../../services/TokenAutoRefreshService";
import buttonMarkAdd from "../../logic/pressedButtonMarkAdd";

interface ICarProps {
  car: ICar;
}

const Car: FC<ICarProps> = ({ car }) => {
  const navigate = useNavigate();

  const deleteHandle: MouseEventHandler<HTMLButtonElement> = async (e) => {
    try {
      await tokenHandledServices
        .deleteCar(car.id)
        .then(() => navigate("/cars"));
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
      <div className={styles.buttonsBox}>
        <Link
          onClick={buttonMarkAdd}
          to={"carFullUpdate"}
          className={"carLink"}
          state={car}
        >
          Overwrite
        </Link>
        <Link
          onClick={buttonMarkAdd}
          to={"carEdit"}
          className={"carLink"}
          state={car}
        >
          Edit
        </Link>
        <button onClick={deleteHandle}>Delete</button>
      </div>
    </div>
  );
};

export default Car;
