import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getMovieById,
  getMovies,
  isFavorite,
  toggleFavorite,
} from "../../services/movieService";
import NoMoviesFound from "../../components/noMoviesFound/NoMoviesFound";
import MovieBox from "../../components/movieBox/MovieBox";
import { useAuth } from "../../context/AuthContext";
import {
  Container,
  Content,
  Poster,
  Title,
  Label,
  Plot,
  RatingsList,
  RatingItem,
  FavoriteButton,
  TopMoviesGrid,
  SectionTitle,
  Loader,
} from "./MovieDetails.styles";

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const userEmail = user?.email || "";
  const [movie, setMovie] = useState<any>(null);
  const [topMovies, setTopMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      const movieData = await getMovieById(id || "");
      setMovie(movieData);

      const top = await getMovies("batman");
      setTopMovies(top.Search || []);
      setLoading(false);

      if (movieData?.imdbID && userEmail) {
        setFavorite(isFavorite(userEmail, movieData.imdbID));
      }
    };

    fetchDetails();
  }, [id, userEmail]);

  const handleFavoriteToggle = () => {
    if (!userEmail) {
      alert("Please log in to add favorites.");
      return;
    }

    const newState = toggleFavorite(userEmail, movie.imdbID);
    setFavorite(newState);
  };

  if (loading) return <Loader>Loading...</Loader>;

  if (!movie || movie.Response === "False") {
    return <NoMoviesFound />;
  }

  return (
    <Container>
      <Content>
        <div>
          <Poster
            src={movie.Poster !== "N/A" ? movie.Poster : "/default-image.jpg"}
            alt={movie.Title}
          />
        </div>

        <div>
          <Title>{movie.Title}</Title>
          <Label>
            <strong>Genre:</strong> {movie.Genre}
          </Label>
          <Label>
            <strong>Director:</strong> {movie.Director}
          </Label>
          <Plot>
            <strong>Plot:</strong> {movie.Plot}
          </Plot>
          <div>
            <Label>
              <strong>Ratings:</strong>
            </Label>
            <RatingsList>
              {movie.Ratings?.map((rating: any, index: number) => (
                <RatingItem key={index}>
                  {rating.Source}: {rating.Value}
                </RatingItem>
              ))}
            </RatingsList>
          </div>
          <FavoriteButton
            onClick={handleFavoriteToggle}
            $isFavorite={favorite}
          >
            {favorite ? "Remove from Favorites" : "Add to Favorites"}
          </FavoriteButton>
        </div>
      </Content>

      <div>
        <SectionTitle>Top Movies</SectionTitle>
        {topMovies.length === 0 ? (
          <div style={{ height: "24rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <NoMoviesFound />
          </div>
        ) : (
          <TopMoviesGrid>
            {topMovies.map((movie) => (
              <MovieBox
                key={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
                movieID={movie.imdbID}
              />
            ))}
          </TopMoviesGrid>
        )}
      </div>
    </Container>
  );
};

export default MovieDetails;
