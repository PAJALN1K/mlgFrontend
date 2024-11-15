import axios, { AxiosError } from "axios";
import { SERVER_URL, USER_LOCALSTORAGE_TOKEN } from "src/shared/config";

export const authInstance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

authInstance.interceptors.request.use(async (config) => {
  const token = localStorage.getItem(USER_LOCALSTORAGE_TOKEN);

  if (config.headers && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

authInstance.interceptors.response.use(
  (response) => response,
  (e) => {
    const err = e as AxiosError;
    throw err;
  }
);

export const authInstanceInsertFile = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "multipart/form-data"
  }
});

authInstanceInsertFile.interceptors.request.use(async (config) => {
  const token = localStorage.getItem(USER_LOCALSTORAGE_TOKEN);

  if (config.headers && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

authInstanceInsertFile.interceptors.response.use(
  (response) => response,
  (e) => {
    const err = e as AxiosError;
    throw err;
  }
);
