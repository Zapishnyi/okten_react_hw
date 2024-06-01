import React, { FC, Profiler, useEffect, useState } from "react";
import { tokenHandledServices } from "../../services/cars.api.cervice";
import ICar from "../../models/ICar";
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  tokenAutoRefreshService,
  tokenRefreshTimer,
} from "../../services/TokenAutoRefreshService";
import styles from "./Cars.module.css";
import Car from "../../components/Car/Car";
import Pagination from "../../components/Pagination/Pagination";
import ICarPaginated from "../../models/ICarPaginated";
import clearMarks from "../../logic/clearMarks";
import IPage from "../../models/IPage";

const Cars: FC = () => {
  console.log(".");
  const navigate = useNavigate();
  const trigger = useLocation();
  const [carsPaginatedObj, setCarsPaginatedObj] = useState<ICarPaginated>({
    total_items: 0,
    total_pages: 0,
    prev: null,
    next: null,
    items: [],
  });

  const [query, setQuery] = useSearchParams({ page: "1" });

  const paginationAction = (action: string) => {
    switch (action) {
      case "next":
        setQuery({ ...carsPaginatedObj.next });
        break;
      case "prev":
        setQuery({ ...carsPaginatedObj.prev });
        break;
    }
  };

  useEffect(() => {
    const getCarsWrapper = async () => {
      try {
        await tokenHandledServices
          .getCars(query.get("page") || "1")
          .then(({ data }) => setCarsPaginatedObj(data));
      } catch {
        try {
          await tokenAutoRefreshService().then(() => getCarsWrapper());
        } catch {
          clearInterval(tokenRefreshTimer);
          navigate("/login");
        }
      }
    };
    getCarsWrapper();
  }, [trigger, query]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.carsBlock}>
        <NavLink to={"carAdd"} onClick={clearMarks}>
          Create a car
        </NavLink>
        <div className={styles.cars}>
          {carsPaginatedObj.items &&
            carsPaginatedObj.items.map((car) => <Car key={car.id} car={car} />)}
        </div>
        <Pagination
          paginationAction={paginationAction}
          carPaginatedObj={carsPaginatedObj}
        />
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default Cars;
