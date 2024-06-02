import React, { FC } from "react";
import styles from "./Pagination.module.css";
import ICarPaginated from "../../models/ICarPaginated";
import { useSearchParams } from "react-router-dom";

interface IProps {
  carsPaginatedObj: ICarPaginated;
}

const Pagination: FC<IProps> = ({
  carsPaginatedObj: { prev, next, total_pages, total_items },
}) => {
  console.log(".");

  const [query, setQuery] = useSearchParams({ page: "1" });

  const paginationAction = (action: string) => {
    switch (action) {
      case "next":
        setQuery({ ...next });
        break;
      case "prev":
        setQuery({ ...prev });
        break;
    }
  };
  return (
    <div className={styles.paginationWrapper}>
      <button
        disabled={!prev}
        onClick={() => {
          paginationAction("prev");
        }}
      >
        Prev
      </button>
      <div>
        <p>
          Page {prev ? +prev.page + 1 + "" : "1"} of {total_pages}
        </p>
        <p> Total : {total_items} car/cars</p>
      </div>

      <button
        disabled={!next}
        onClick={() => {
          paginationAction("next");
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
