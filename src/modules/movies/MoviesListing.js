import { useEffect, useState } from "react";
import { getMovies } from "./_redux/moviesService";
import MovieCard from "./movieCard/MovieCard";
import { Link } from "react-router-dom";
import { getAllMovies } from "./_redux/moviesActions";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import Pagination from "components/Pagination";
export const MoviesListing = () => {
  const { allMovies, totalPages, totalResults } = useSelector(
    (state) => state?.movies,
    shallowEqual
  );

  const dispatch = useDispatch();

  const [page, setPage] = useState(3);
  const [limit, setLimit] = useState(10);
  const [sortBy, setSortBy] = useState("popularity");
  const [sortOrder, setSortOrder] = useState("desc");
  const [include_adult, setInclude_adult] = useState(false);
  const [include_video, setInclude_video] = useState(false);
  const [language, setLanguage] = useState("en-US");
  const [sort_by, setSort_by] = useState("popularity");

  useEffect(() => {
    dispatch(
      getAllMovies(
        `${
          (page,
          limit,
          sortBy,
          sortOrder,
          include_adult,
          include_video,
          language,
          sort_by)
        }`
      )
    );
  }, [
    page,
    limit,
    sortBy,
    sortOrder,
    include_adult,
    include_video,
    language,
    sort_by,
  ]);

  return (
    <>
      <div class="container mx-auto p-4 ">
        <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
          {allMovies?.map((movie) => (
            <MovieCard
              id={movie?.id}
              original_language={movie?.original_language}
              original_title={movie?.original_title}
              popularity={movie?.popularity}
              poster={movie?.backdrop_path}
              release_date={movie?.release_date}
              title={movie?.title}
              video={movie?.video}
              vote_average={movie?.vote_average}
              vote_count={movie?.vote_count}
              movie={movie}
            />
          ))}
        </div>
        <Pagination
          //   currentPage={page}
          //   totalPages={totalPages}
          //   page={page}
          //   setPage={setPage}
          //   limit={limit}
          //   setLimit={(val) => setLimit(val)}
          //   totalResults={totalResults}
          itemsPerPage={10}
          totalItems={totalResults}
          setPage={setPage}
          currentPage={page}
        />
      </div>
    </>
  );
};
