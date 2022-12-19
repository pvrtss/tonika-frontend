import { combineReducers, configureStore } from '@reduxjs/toolkit'
import songReducer from './slices/songSlice'

export default configureStore({
    reducer: combineReducers({
        songs: songReducer
    })
})
