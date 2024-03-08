import axios from "../../../utils/axios";
export const getMovies = async () => {
  const movies = await axios.get(
    `/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc`
  );

  return movies;
};

export const getMovieById = async (id) => {
  return await axios.get(`/movie/${id}`);
};
