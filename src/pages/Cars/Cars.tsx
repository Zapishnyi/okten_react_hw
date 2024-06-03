import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { tokenHandledServices } from "../../services/cars.api.cervice";

import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useOutletContext,
  useSearchParams,
} from "react-router-dom";
import {
  tokenAutoRefreshService,
  tokenRefreshTimer,
} from "../../services/tokenAutoRefreshService";
import styles from "./Cars.module.css";
import Car from "../../components/Car/Car";
import Pagination from "../../components/Pagination/Pagination";
import ICarPaginated from "../../models/ICarPaginated";
import clearMarks from "../../logic/pressedButtonMarksClear";

const Cars: FC = () => {
  console.log(".");
  const navigate = useNavigate();
  const [carsPaginatedObj, setCarsPaginatedObj] = useState<ICarPaginated>({
    total_items: 0,
    total_pages: 0,
    prev: null,
    next: null,
    items: [],
  });

  const [query, setQuery] = useSearchParams();
  const trigger = useLocation();
  useEffect(() => {
    const getCarsWrapper = async () => {
      try {
        await tokenHandledServices
          .getCars(query.get("page") || "1")
          .then(({ data }) => setCarsPaginatedObj(data));
      } catch {
        try {
          await tokenAutoRefreshService("externalCall").then(() =>
            getCarsWrapper(),
          );
        } catch {
          clearInterval(tokenRefreshTimer);
          navigate("/login");
        }
      }
    };
    getCarsWrapper();
  }, [query, trigger]);

  const setPage = useOutletContext() as React.Dispatch<
    React.SetStateAction<string>
  >;

  setPage(query.get("page") || "1");

  return (
    <div className={styles.wrapper}>
      <div className={styles.carsBlock}>
        <NavLink to={`carAdd?page=${query.get("page")}`} onClick={clearMarks}>
          Create a car
        </NavLink>
        <div className={styles.cars}>
          {carsPaginatedObj.items &&
            carsPaginatedObj.items.map((car) => <Car key={car.id} car={car} />)}
        </div>
        <Pagination carsPaginatedObj={carsPaginatedObj} />
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default Cars;
