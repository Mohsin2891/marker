import { moviesSlice } from "./moviesSlice";
import * as moviesServices from "./moviesService";
const actions = moviesSlice.actions;
export const getAllMovies = (params) => async (dispatch) => {
  try {
    const res = await moviesServices.getMovies(params);

    dispatch(actions.setAllMovies(res?.data));
  } catch (error) {
    throw new Error(error?.response?.data?.message);
  }
};

export const getMovieById = (id, onSuccess) => async (dispatch) => {
  try {
    const res = await moviesServices.getMovieById(id);
    dispatch(actions.selectedMovie(res));
  } catch (error) {
    throw new Error(error?.response?.data?.message);
  }
};
