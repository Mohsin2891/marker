import { useEffect, useState, useContext } from "react";
import MovieCard from "./movieCard/MovieCard";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import Pagination from "components/Pagination";
import SearchModal from "./moviesFilters/MoviesFilters";
import PersonFilters from "./personfilter/PersonFilters";
import CreateMoviedialogue from "./createMovie/createMovie";
import { getMoviesByFilter } from "./_redux/moviesActions";
//context
import MoviesContext from "context/Movies";

//utility func
import toTitleCase from "utils/toTitleCase";

const MoviesListing = ({
  shouldPersonModalBeOpen,
  setShouldPersonModalBeOpen,
}) => {
  const { movieCategory, setMovieCategory, actor, setActor } =
    useContext(MoviesContext);
  const { allMovies, totalPages, totalResults } = useSelector(
    (state) => state?.movies,
    shallowEqual
  );
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sortBy, setSortBy] = useState("popularity");
  const [sortOrder, setSortOrder] = useState("desc");
  const [include_adult, setInclude_adult] = useState(false);
  const [include_video, setInclude_video] = useState(false);
  const [language, setLanguage] = useState("en-US");
  const [sort_by, setSort_by] = useState("popularity");
  const [showCreateMovieDialogue, setShowCreateMovieDialogue] = useState(false);
  const [shouldSearchBeOpen, setShouldSeachModalBeOpen] = useState(false);
  const [getMovieBy, setGetMovieBy] = useState("popular");

  //fetchting and storing
  useEffect(() => {
    const params = `/movie/${movieCategory}?&language=${language}&page=${page}`;
    dispatch(getMoviesByFilter(params));
  }, [
    page,
    limit,
    sortBy,
    sortOrder,
    include_adult,
    include_video,
    language,
    sort_by,
    getMovieBy,
    movieCategory,
    dispatch,
  ]);

  return (
    <>
      <div class="container mx-auto p-4 mt-16">
        <div className=" flex justify-between items-center m-3">
          <button
            className="focus:outline-none transition duration-150 ease-in-out hover:bg-gray-200 border bg-white rounded text-indigo-700 px-8 py-2 text-sm"
            onClick={() => {
              setShowCreateMovieDialogue((pre) => !pre);
            }}
          >
            ADD MOVIE
          </button>
          <span className="text-2xl text-blue-500 ">
            {toTitleCase(movieCategory)}
          </span>
          {actor && <PersonFilters isOpen={actor} setIsOpen={setActor} />}
          <SearchModal
            isOpen={shouldSearchBeOpen}
            setIsOpen={setShouldSeachModalBeOpen}
          />
        </div>
        <CreateMoviedialogue
          isOpen={showCreateMovieDialogue}
          setIsOpen={setShowCreateMovieDialogue}
        />
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
        {totalResults > 0 && (
          <Pagination
            itemsPerPage={10}
            totalPages={totalPages}
            totalItems={totalResults}
            setPage={setPage}
            currentPage={page}
          />
        )}
      </div>
    </>
  );
};
export default MoviesListing;
