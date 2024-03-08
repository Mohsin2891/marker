import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../_redux/moviesActions";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { moviesSlice } from "../_redux/moviesSlice";
const actions = moviesSlice?.actions;
const MovieInfo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovieById(id));
    return () => {
      dispatch(actions?.selectedMovie(null));
    };
  }, [id]);

  const { selectedMovie } = useSelector((state) => state?.movies, shallowEqual);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex flex-1">
        <div className="flex flex-col md:flex-row flex-1">
          <div className="flex justify-center md:justify-start md:w-1/4 lg:w-1/5 xl:w-1/6 2xl:w-1/7 mb-4 md:mb-0">
            <img
              src={`https://image.tmdb.org/t/p/original${selectedMovie?.poster_path}`}
              alt={selectedMovie?.title}
              className="rounded-lg shadow-lg max-w-full h-auto align-middle border-none"
            />
          </div>
          <div className="flex flex-col justify-center md:pl-4 md:w-3/4 lg:w-4/5 xl:w-5/6 2xl:w-6/7">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {selectedMovie?.title}
            </h1>
            <h2 className="text-xl text-gray-400 mt-2">
              {selectedMovie?.tagline}
            </h2>
            <div className="mt-4">
              <div className="mb-2">
                <strong>Genres:</strong>{" "}
                {selectedMovie?.genres.map((genre) => genre.name).join(", ")}
              </div>
              <div className="mb-2">
                <strong>Release Date:</strong> {selectedMovie?.release_date}
              </div>
              <div className="mb-2">
                <strong>Runtime:</strong> {selectedMovie?.runtime} minutes
              </div>
              <div className="mb-2">
                <strong>Rating:</strong> {selectedMovie?.vote_average} / 10 (
                {selectedMovie?.vote_count} votes)
              </div>
              <div className="mb-2">
                <strong>Overview:</strong> {selectedMovie?.overview}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
