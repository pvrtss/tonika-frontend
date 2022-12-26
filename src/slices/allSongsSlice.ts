import { createSlice } from "@reduxjs/toolkit";
import { ISong, ISongsState } from "interfaces";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState: ISongsState = {
  songs: [],
};

const allSongsSlice = createSlice({
  name: "allSongsState",
  // в initialState мы указываем начальное состояние нашего глобального хранилища
  initialState,
  // Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
  reducers: {
    setAllSongs(state, action: PayloadAction<ISong[]>) {
      state.songs = action.payload;
    },
    clearAllSongs(state) {
      state.songs = [];
    },
  },
});

export const selectAllSongs = (state: RootState) => state.songs;
export const { setAllSongs, clearAllSongs } = allSongsSlice.actions;

export default allSongsSlice.reducer;
