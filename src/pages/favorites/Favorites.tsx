import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { getFavoriteMoviesByUser } from "../../services/movieService";
import MovieBox from "../../components/movieBox/MovieBox";
import {
  Wrapper,
  Title,
  Message,
  Grid,
} from "./Favorites.styles";


const Favorites: React.FC = () => {
  const { user } = useAuth();
  const userEmail = user?.email;
  const [favoriteMovies, setFavoriteMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!userEmail) {
        setFavoriteMovies([]);
        setLoading(false);
        return;
      }

      try {
        const movies = await getFavoriteMoviesByUser(userEmail);
        setFavoriteMovies(movies);
      } catch (error) {
        console.error("Failed to load favorite movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [userEmail]);

  if (!userEmail) {
    return <Message>Please log in to view your favorite movies.</Message>;
  }

  return (
    <Wrapper>
      <Title>
        Your Favorite Movies{" "}
        {!loading && favoriteMovies.length > 0 && (
          <span>({favoriteMovies.length})</span>
        )}
      </Title>
      {loading ? (
        <Message>Loading favorites...</Message>
      ) : favoriteMovies.length === 0 ? (
        <Message>No favorite movies found.</Message>
      ) : (
        <Grid>
          {favoriteMovies.map((movie) => (
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
    </Wrapper>
  );
  
};

export default Favorites;
