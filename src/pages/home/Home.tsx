import React, { useState, useEffect } from "react";
import { getMovies } from "../../services/movieService";
import MovieBox from "../../components/movieBox/MovieBox";
import NoMoviesFound from "../../components/noMoviesFound/NoMoviesFound";
import {
  SearchInput,
  PaginationWrapper,
  PaginationButton,
  PageButton,
  LoadingText,
  NoMoviesWrapper,
  SearchContainer,
  Ellipsis
} from "./Home.styles";
import { Grid } from "../favorites/Favorites.styles";

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
    <>
      <SearchContainer>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for movies"
        />
      </SearchContainer>

      {loading ? (
        <LoadingText>Loading...</LoadingText>
      ) : (
        <>
          {movies.length === 0 ? (
            <NoMoviesWrapper>
              <NoMoviesFound />
            </NoMoviesWrapper>
          ) : (
            <Grid>
              {movies.map((movie) => (
                <MovieBox
                  key={movie.imdbID}
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                  movieID={movie.imdbID}
                />
              ))}
            </Grid>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <PaginationWrapper>
              <PaginationButton
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
              >
                Previous
              </PaginationButton>

              {[...Array.from(Array(totalPages).keys())]
                .slice(0, 5)
                .map((i) => {
                  const pageNum = i + 1;
                  return (
                    <PageButton
                      key={pageNum}
                      onClick={() => setPage(pageNum)}
                      $isactive={page === pageNum}
                    >
                      {pageNum}
                    </PageButton>
                  );
                })}

              {totalPages > 5 && <Ellipsis>...</Ellipsis>}

              <PaginationButton
                disabled={page === totalPages}
                onClick={() => setPage((p) => p + 1)}
              >
                Next
              </PaginationButton>
            </PaginationWrapper>
          )}
        </>
      )}
    </>
  );
};

export default Home;
