import { useEffect, useState } from "react";
import MovieCard from "./movieCard/MovieCard";
import { getAllMovies } from "./_redux/moviesActions";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import Pagination from "components/Pagination";
import SearchModal from "./moviesFilters/MoviesFilters";
import CreateMoviedialogue from "./createMovie/createMovie";
import { getMoviesByFilter } from "./_redux/moviesActions";
import toTitleCase from "utils/toTitleCase";
export const MoviesListing = ({getMovieBy}) => {
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
const [showCreateMovieDialogue, setShowCreateMovieDialogue]=useState(false)
  const [shouldSearchBeOpen, setShouldSeachModalBeOpen] = useState(false);
  useEffect(() => {
    // let  params = `/discover/movie?include_adult=${include_adult}&include_video=${include_video}&language=${language}&page=${page}&sort_by=${sort_by}.${sortOrder}`;
    // dispatch(getAllMovies(params));

     
      const params=`/movie/${getMovieBy}?&language=${language}&page=${page}`
      dispatch(getMoviesByFilter(params)) 
    
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
    dispatch,
  ]);

  return (
    <>
      <div class="container mx-auto p-4 mt-16">
       <div className=" flex justify-between items-center m-3">
       
        <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-gray-200 border bg-white rounded text-indigo-700 px-8 py-2 text-sm" onClick={()=>{setShowCreateMovieDialogue((pre)=>!pre)}}>
          ADD MOVIE
        </button>
        <span className="text-2xl text-blue-500 ">{toTitleCase(getMovieBy)}</span>
        <SearchModal
          isOpen={shouldSearchBeOpen}
          setIsOpen={setShouldSeachModalBeOpen}
        />
       </div>
       <CreateMoviedialogue isOpen={showCreateMovieDialogue} setIsOpen={setShowCreateMovieDialogue}/>
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
        )}
      </div>
    </>
  );
};
