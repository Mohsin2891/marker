import React from "react";
import { useDispatch } from "react-redux";
import { moviesSlice } from "modules/movies/_redux/moviesSlice";
import { useNavigate } from "react-router-dom";
const actions = moviesSlice.actions;

const MovieCard = ({
  id,
  original_language,

  overview,
  popularity,
  poster,
  release_date,
  title,

  vote_average,
  vote_count,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 cursor-pointer"
      onClick={() => {
        navigate(`/movie/${id}`);
      }}
    >
      <img
        className="w-full h-96 object-cover"
        src={`https://image.tmdb.org/t/p/original${poster}`}
        alt={`Poster of the movie titled ${title}`}
      />
      <div className="p-6">
        <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          {title}{" "}
          <span className="text-sm font-medium">
            ({original_language.toUpperCase()})
          </span>
        </h5>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {release_date}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-base mb-4">
          {overview}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
            Popularity: {Math.round(popularity)}
          </span>
          <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
            Avg. Vote: {vote_average}
          </span>
          <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
            Votes: {vote_count}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
