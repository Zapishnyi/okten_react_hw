import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import HeaderTokenHandled from "../../components/Headers/HeaderTokenHandled";
import styles from "../ChildrenLayouts.module.css";

const TokenHandledLayout = () => {
  console.log(".");

  const [page, setPage] = useState<string>("1");
  return (
    <div className={styles.container}>
      <HeaderTokenHandled currentPage={page} />
      <Outlet context={setPage} />
    </div>
  );
};

export default TokenHandledLayout;
