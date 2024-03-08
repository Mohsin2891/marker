import axios from "../../../utils/axios";
export const getMovies = async (params) => {
  const { include_adult, include_video, language, page, sort_by, sortOrder } =
    params;
  debugger;
  const movies = await axios.get(
    //    `/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc`
    `/discover/movie?include_adult=${include_adult}&include_video=${include_video}&language=${language}&page=${page}&sort_by=${sort_by}.${sortOrder}`
  );

  return movies;
};

export const getMovieById = async (id) => {
  return await axios.get(`/movie/${id}`);
};
