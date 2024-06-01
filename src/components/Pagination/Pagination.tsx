import React, { FC } from "react";
import styles from "./Pagination.module.css";
import IPage from "../../models/IPage";
import ICarPaginated from "../../models/ICarPaginated";

interface IProps {
  paginationAction: (action: string) => void;
  carPaginatedObj: ICarPaginated;
}

const Pagination: FC<IProps> = ({ paginationAction, carPaginatedObj }) => {
  return (
    <div className={styles.paginationWrapper}>
      <button
        disabled={!carPaginatedObj.prev}
        onClick={() => {
          paginationAction("prev");
        }}
      >
        Prev
      </button>
      <p>
        Page {carPaginatedObj.prev ? +carPaginatedObj.prev.page + 1 + "" : "1"}{" "}
        of {carPaginatedObj.total_pages} pages
      </p>
      <button
        disabled={!carPaginatedObj.next}
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
