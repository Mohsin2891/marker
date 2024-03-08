import { combineReducers } from "@reduxjs/toolkit";
import { moviesSlice } from "modules/movies/_redux/moviesSlice";
const rootReducer = combineReducers({
  movies: moviesSlice.reducer,
});

export default rootReducer;
