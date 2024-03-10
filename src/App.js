import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loader } from "rsuite";


const MovieInfo = lazy(() => import("modules/movies/moviesInfo/MoviesInfo"));
const Dashboard = lazy(() => import("components/Dashboard"));
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
        </Routes>
    
      </Suspense>
    </BrowserRouter>
  );
}





