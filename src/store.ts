import { combineReducers, configureStore } from "@reduxjs/toolkit";
import songReducer from "./slices/songSlice";
import userReducer from "./slices/userSlice";
import allSongsReducer from "./slices/allSongsSlice";

export const store = configureStore({
  reducer: combineReducers({
    songs: songReducer,
    allSongs: allSongsReducer,
    user: userReducer,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
