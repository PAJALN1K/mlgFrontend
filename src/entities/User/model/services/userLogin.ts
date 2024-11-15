import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { USER_LOCALSTORAGE_TOKEN } from "src/shared/config";
import { AuthApi } from "../../api/authApi";
import { UserLoginType, UserType } from "../types/user";

export const userLogin = createAsyncThunk(
  "user/login",
  async (user: UserLoginType): Promise<UserType> => {
    try {
      const token = await AuthApi.loginUser(user);
      localStorage.setItem(USER_LOCALSTORAGE_TOKEN, token);
      return { username: user.username, isAuth: true };
    } catch (e) {
      const err = e as AxiosError;
      throw err;
    }
  }
);
