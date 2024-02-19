import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../utils/userSlice';
import moviesReducer from '../utils/moviesSlice';

const store = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
    }
});

export default store;