import ITokens from "../models/ITokens";

interface ILSService {
  saveTokens: (tokenPair: ITokens) => void;
  getAccessToken: () => string;
  getRefreshToken: () => string;
  clearTokens: () => void;
}

const blindTokens: string = JSON.stringify({
  access: "",
  refresh: "",
});

export const localStorageService: ILSService = {
  saveTokens: (tokenPair) =>
    localStorage.setItem("tokenPair", JSON.stringify(tokenPair)),
  getAccessToken: () =>
    JSON.parse(localStorage.getItem("tokenPair") || blindTokens).access,
  getRefreshToken: () =>
    JSON.parse(localStorage.getItem("tokenPair") || blindTokens).refresh,
  clearTokens: () => localStorage.removeItem("tokenPair"),
};
