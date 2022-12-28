import { createSlice } from "@reduxjs/toolkit";
import { ISong, ISongsState } from "interfaces";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState: ISongsState = {
  songs: [],
};

const songsSlice = createSlice({
  name: "songsState",
  initialState,
  reducers: {
    setSongs(state, action: PayloadAction<ISong[]>) {
      state.songs = action.payload;
    },
    clearSongs(state) {
      state.songs = [];
    },
  },
});

export const selectSongs = (state: RootState) => state.songs;
export const { setSongs, clearSongs } = songsSlice.actions;

export default songsSlice.reducer;
