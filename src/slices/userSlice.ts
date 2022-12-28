import { createSlice } from "@reduxjs/toolkit";
import { ISong, IUser, IUserState } from "interfaces";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState: IUserState = {
  user: undefined,
};

const userSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    logoutUser(state) {
      state.user = undefined;
    },
    setFavourites(state, action: PayloadAction<ISong[]>) {
      if (state.user) state.user.favourites = action.payload;
    },
  },
});

export const selectUser = (state: RootState) => state.user;
export const { setUser, logoutUser, setFavourites } = userSlice.actions;

export default userSlice.reducer;
