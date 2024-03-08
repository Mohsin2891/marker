import { useEffect, useState } from "react";
import { getMovies } from "./_redux/moviesService";
import MovieCard from "./movieCard/MovieCard";
import { Link } from "react-router-dom";

export const MoviesListing = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMovies();
        setMovies(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div class="container mx-auto p-4">
        <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {movies?.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <MovieCard
                original_language={movie?.original_language}
                original_title={movie?.original_title}
                popularity={movie?.popularity}
                poster={movie?.backdrop_path}
                release_date={movie?.release_date}
                title={movie?.title}
                video={movie?.video}
                vote_average={movie?.vote_average}
                vote_count={movie?.vote_count}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
