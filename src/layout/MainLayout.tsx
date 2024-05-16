import React, { FC, useRef, useState } from "react";
import Header from "../components/Header/Header";

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import styles from "./MainLayout.module.css";
import { IUserProps } from "../models/IUserProps";
import { IPostProps } from "../models/IPostProps";
import { IUserChoice } from "../models/IUserChoice";

const MainLayout: FC = () => {
  // const [chosenUser, setChosenUser] = useState<IUserProps | null>(null);
  // const [chosenPost, setChosenPost] = useState<IPostProps | null>(null);
  // const userChoice: IUserChoice = {
  //   chosenUser,
  //   chosenPost,
  //   setChosenUser,
  //   setChosenPost,
  // };
  return (
    <div className={styles.layoutWrapper}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
