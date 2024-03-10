import axios from "../../../utils/axios";
export const getMovies = async (params) => {
  const movies = await axios.get(params);

  return movies;
};

export const getMovieById = async (id) => {
  return await axios.get(`/movie/${id}`);
};

export const addMovie = async (payload) => {
  try {
    return await axios.post(`/list`, payload);
  } catch (error) {
    return error;
  }
};
export const getMoviesByFilter = async (params)=>{
  return await axios.get(params)
}

export const searchMovie = async (params)=>{
  return await axios.get(params)
}