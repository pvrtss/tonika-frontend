import { combineReducers, configureStore } from "@reduxjs/toolkit";
import songReducer from "./slices/songSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: combineReducers({
    songs: songReducer,
    user: userReducer,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
