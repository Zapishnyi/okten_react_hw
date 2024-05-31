import { localStorageService } from "./localStorageService";
import { authServices } from "./cars.api.cervice";
import { useNavigate } from "react-router-dom";

export let tokenRefreshTimer: NodeJS.Timer;

export const tokenAutoRefreshService = async () => {
  clearInterval(tokenRefreshTimer);
  return await authServices
    .refreshTokens(localStorageService.getRefreshToken())
    .then(({ data }) => {
      localStorageService.saveTokens(data);
      console.log("Token Refresh successful");
      tokenRefreshTimer = setTimeout(() => {
        tokenAutoRefreshService();
      }, 119000);
    });
};
