import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "components/Dashboard";
import MovieInfo from "modules/movies/moviesInfo/MoviesInfo";

export default function IndexPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/movie/:id" element={<MovieInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
