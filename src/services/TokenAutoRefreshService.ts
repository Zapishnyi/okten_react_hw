import { localStorageService } from "./localStorageService";
import { tokenHandledServices } from "./cars.api.cervice";

export let tokenRefreshTimer: NodeJS.Timer;

export const tokenAutoRefreshService = async () => {
  clearInterval(tokenRefreshTimer);
  return await tokenHandledServices
    .refreshTokens(localStorageService.getRefreshToken())
    .then(({ data }) => {
      localStorageService.saveTokens(data);
      console.log("Token Refresh successful");
      tokenRefreshTimer = setTimeout(() => {
        tokenAutoRefreshService();
      }, 119000);
    });
};
