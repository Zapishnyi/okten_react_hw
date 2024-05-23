import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={styles.layOutWrapper}>
      <Header />
      <main className={styles.pagesContainer}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
