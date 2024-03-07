import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import counterReducer from "./counter/counterSlice";
import CustomizerReducer from "./customizer/CustomizerSlice";
import authReducer from "./auth/authSlice";
// import UserReducer from "./apps/user/UserSlice";


export const store = configureStore({
  reducer: {
    auth:authReducer,
    counter: counterReducer,
    customizer: CustomizerReducer,
    // user: UserReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

const rootReducer = combineReducers({
  auth:authReducer,
  counter: counterReducer,
  customizer: CustomizerReducer,
  // user: UserReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;
