import React, { useEffect, useState } from "react";
import { tokenHandledServices } from "../../services/cars.api.cervice";
import {
  tokenAutoRefreshService,
  tokenRefreshTimer,
} from "../../services/TokenAutoRefreshService";
import IUserInfo from "../../models/IUserInfo";
import { useNavigate } from "react-router-dom";
import styles from "./UserInfo.module.css";

const UserInfo = () => {
  console.log(".");
  const navigate = useNavigate();
  const [me, setMe] = useState<IUserInfo | null>(null);
  useEffect(() => {
    const getMEWrapper = async () => {
      try {
        await tokenHandledServices.getMe().then(({ data }) => setMe(data));
      } catch {
        try {
          await tokenAutoRefreshService().then(() => getMEWrapper());
        } catch {
          console.log("Tokens refresh failed");
          clearInterval(tokenRefreshTimer);
          navigate("/login");
        }
      }
    };
    getMEWrapper();
  }, []);

  return (
    <div>
      {me && (
        <div className={styles.userInfo}>
          <p>User ID: {me.id}</p>
          <p>Username: {me.username} </p>
          <p>Created date: {me.created}</p>
          <p>Updated date: {me.updated};</p>
          <p>Is active: {me.is_active + ""}</p>
          <p>Is superuser: {me.is_superuser + ""};</p>
          <p>Last login date: {me.last_login + ""}</p>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
