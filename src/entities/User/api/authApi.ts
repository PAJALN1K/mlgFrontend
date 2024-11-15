import { AxiosResponse } from "axios";
import { defaultInstance } from "src/shared/api";
import { API_CONFIRM_CODE, API_LOGIN, API_REGISTER } from "src/shared/config/URLs";
import { UserLoginType, UserRegistrationType } from "../model/types/user";

export const AuthApi = {
  async register(newUser: UserRegistrationType): Promise<string> {
    const response: AxiosResponse = await defaultInstance.post(API_REGISTER, newUser);

    return response.data;
  },

  async createUser(): Promise<AxiosResponse> {
    return defaultInstance.post(API_CONFIRM_CODE);
  },

  async loginUser(loggedUser: UserLoginType): Promise<string> {
    const response: AxiosResponse = await defaultInstance.post(API_LOGIN, loggedUser);

    return response.data;
  }
};
