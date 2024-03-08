import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import axiosInstance from 'utils/axios';

const MovieInfo = () => {
  const { id } = useParams();

  useEffect(() => {
    axiosInstance

  }, [id]);

  return (
    <div>
      <h1>Movie ID: {id}</h1>
      {/* Display movie information */}
    </div>
  );
}

export default MovieInfo;
