import axios, { AxiosError } from "axios";
import { SERVER_URL } from "src/shared/config/URLs";

export const defaultInstance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

defaultInstance.interceptors.response.use(
  (response) => response,
  (e) => {
    const err = e as AxiosError;
    throw err;
  }
);
