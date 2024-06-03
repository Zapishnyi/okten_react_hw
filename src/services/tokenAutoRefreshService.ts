import { localStorageService } from "./localStorageService";
import { tokenHandledServices } from "./cars.api.cervice";

export let tokenRefreshTimer: NodeJS.Timer;

export const tokenAutoRefreshService = async (flag: string) => {
  clearInterval(tokenRefreshTimer);
  const refreshWrapper = async () => {
    return await tokenHandledServices
      .refreshTokens(localStorageService.getRefreshToken())
      .then(({ data }) => {
        localStorageService.saveTokens(data);
        console.log("Token Refresh successful");
        tokenRefreshTimer = setTimeout(() => {
          tokenAutoRefreshService("internalCall");
        }, 119000);
      });
  };
  switch (flag) {
    case "internalCall":
      {
        try {
          return await refreshWrapper();
        } catch {
          console.log("Token refresh failed");
        }
      }
      break;
    case "externalCall": {
      return await refreshWrapper();
    }
  }
};
