import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

const MovieInfo = () => {
  const { id } = useParams();

  useEffect(() => {
    // Fetch movie details using the "id"
  }, [id]);

  return (
    <div>
      <h1>Movie ID: {id}</h1>
      {/* Display movie information */}
    </div>
  );
}

export default MovieInfo;
