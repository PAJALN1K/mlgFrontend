import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userLogin } from "../services/userLogin";
import { UserType } from "../types/user";

const initialState: UserType = {
  isAuth: false,
  username: null,
  email: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(userLogin.fulfilled, (state, { payload }: PayloadAction<UserType>) => {
      state.isAuth = payload.isAuth;
      state.username = payload.username;
    })
});

export const userReducer = userSlice.reducer;
