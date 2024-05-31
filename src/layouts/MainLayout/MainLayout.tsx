import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import styles from "./MainLayout.module.css";
import { tokenRefreshTimer } from "../../services/TokenAutoRefreshService";

const MainLayout: FC = () => {
  console.log(".");

  return (
    <div className={styles.wrapper}>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
