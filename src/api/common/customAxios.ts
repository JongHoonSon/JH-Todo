import axios from "axios";
import { checkUserLoggedIn } from "./../../utils/checkUserLoggedIn";

export const customAxios = axios.create({});

customAxios.interceptors.request.use((config) => {
  const isUserLoggedIn = checkUserLoggedIn();
  if (!isUserLoggedIn) return config;
  config.headers = {
    "Content-type": "application/json",
    Authorization: localStorage.getItem("jwt"),
  };
  return config;
});
