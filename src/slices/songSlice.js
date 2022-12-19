import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux"

const songSlice = createSlice({
    name: "songs",
    initialState: {
        data: []
    },
    reducers: {
        setData(state, {payload}) {
            state.data = payload
        },
    }
})

export const useData = () => useSelector((state) => state.songs.data)

export const {
    setData: setDataAction
} = songSlice.actions


export default songSlice.reducer
