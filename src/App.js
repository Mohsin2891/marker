import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loader } from "rsuite";
import Layout from "hoc/Layout";
import MoviesListing from "modules/movies/MoviesListing";
import MoviesContext from "context/Movies";
const Person = lazy(() => import("modules/movies/person/Person"));
const MovieInfo = lazy(() => import("modules/movies/moviesInfo/MoviesInfo"));
export default function IndexPage() {
  //states for context and local component
  const [movieCategory, setMovieCategory] = useState("popular");
  const [actor, setActor] = useState(false);

  //context values
  const moviesContexValues = {
    movieCategory,
    setMovieCategory,
    actor,
    setActor,
  };

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div>
            <Loader center size="md" />
          </div>
        }
      >
        <MoviesContext.Provider value={moviesContexValues}>
          <Layout>
            <Routes>
              <Route path="/" element={<MoviesListing />} />
              <Route path="/movie/:id" element={<MovieInfo />} />
              <Route path="/person" element={<Person />} />
            </Routes>
          </Layout>
        </MoviesContext.Provider>
      </Suspense>
    </BrowserRouter>
  );
}
