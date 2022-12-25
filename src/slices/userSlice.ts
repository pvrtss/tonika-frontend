import { createSlice } from "@reduxjs/toolkit";
import { IUser, IUserState } from "interfaces";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState: IUserState = {
  user: undefined,
};

const userSlice = createSlice({
  name: "userState",
  // в initialState мы указываем начальное состояние нашего глобального хранилища
  initialState,
  // Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    logoutUser(state) {
      state.user = undefined;
    },
  },
});

export const selectUser = (state: RootState) => state.user;
export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
