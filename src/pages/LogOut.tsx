import React, { FC, useEffect } from "react";
import { tokenRefreshTimer } from "../services/TokenAutoRefreshService";
import { useNavigate } from "react-router-dom";
import { localStorageService } from "../services/localStorageService";

const LogOut: FC = () => {
  console.log(".");
  const navigate = useNavigate();

  useEffect(() => {
    clearInterval(tokenRefreshTimer);
    localStorageService.clearTokens();
    navigate("/login");
  });

  return <div></div>;
};

export default LogOut;
