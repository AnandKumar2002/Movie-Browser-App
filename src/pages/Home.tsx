import React, { useState, useEffect } from "react";
import { getMovies } from "../services/movieService";
import MovieBox from "../components/MovieBox";
import NoMoviesFound from "../components/NoMoviesFound";

const Home: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("Avengers");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const data = await getMovies(searchTerm, page);
      setMovies(data.Search || []);
      setTotalResults(parseInt(data.totalResults) || 0);
      setLoading(false);
    };

    fetchMovies();
  }, [searchTerm, page]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="sm:px-6 sm:py-4 p-0">
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for movies"
          className="p-2 rounded-md bg-gray-700 text-white w-full"
        />
      </div>

      {loading ? (
        <div className="text-center text-white">Loading...</div>
      ) : (
        <>
          {movies.length === 0 ? (
            <div className="flex justify-center items-center h-96">
              <NoMoviesFound />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {movies.map((movie) => (
                <MovieBox
                  key={movie.imdbID}
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                  movieID={movie.imdbID}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center items-center gap-2 flex-wrap text-white">
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
                className="px-4 py-2 bg-gray-600 rounded disabled:opacity-50"
              >
                Previous
              </button>

              {[...Array.from(Array(totalPages).keys())]
                .slice(0, 5)
                .map((i) => {
                  const pageNum = i + 1;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setPage(pageNum)}
                      className={`px-4 py-2 rounded ${
                        page === pageNum
                          ? "bg-yellow-500 text-black"
                          : "bg-gray-700"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

              {totalPages > 5 && (
                <span className="text-gray-400 ml-2">...</span>
              )}

              <button
                disabled={page === totalPages}
                onClick={() => setPage((p) => p + 1)}
                className="px-4 py-2 bg-gray-600 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
