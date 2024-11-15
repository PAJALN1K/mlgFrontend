import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "src/entities/User";

const rootReducer = combineReducers({
  user: userReducer
});

export const store = configureStore({ reducer: rootReducer });
