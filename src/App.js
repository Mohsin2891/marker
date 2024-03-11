import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loader } from "rsuite";

const Dashboard = lazy(() => import("components/Dashboard/index"));
const Person = lazy(() => import("modules/movies/person/Person"));
const MovieInfo = lazy(() => import("modules/movies/moviesInfo/MoviesInfo"));

export default function IndexPage() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div>
            <Loader center size="md" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/movie/:id" element={<MovieInfo />} />
          {/* <Route path="/person" element={<Person />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
