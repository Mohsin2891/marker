import React from "react";

const MovieDetails = ({
  original_language,
  original_title,
  overview,
  popularity,
  poster,
  release_date,
  title,
  video,
  vote_average,
  vote_count,
}) => {
  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex justify-center items-center">
          <img
            src={poster}
            alt={title}
            className="max-w-xs w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            {original_title && (
              <p className="text-sm text-gray-600">
                (Original Title: {original_title})
              </p>
            )}
            <p className="text-gray-800 mt-2">{overview}</p>
            <p className="mt-2">
              <strong>Release Date:</strong> {release_date}
            </p>
            <p>
              <strong>Original Language:</strong>{" "}
              {original_language.toUpperCase()}
            </p>
            <p>
              <strong>Popularity:</strong> {popularity.toFixed(2)}
            </p>
            <p>
              <strong>Vote Average:</strong> {vote_average} / 10
            </p>
            <p>
              <strong>Vote Count:</strong> {vote_count}
            </p>
          </div>
          <div className="mt-4">
            {video && <p className="text-green-500">Video Available</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
