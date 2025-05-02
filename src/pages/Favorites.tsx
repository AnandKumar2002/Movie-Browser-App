import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getFavoriteMoviesByUser } from "../services/movieService";
import MovieBox from "../components/MovieBox";

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
    return (
      <div className="p-6 text-white text-center">
        Please log in to view your favorite movies.
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-2xl text-white mb-4">
        Your Favorite Movies{" "}
        {!loading && favoriteMovies.length > 0 && (
          <span className="text-yellow-400">({favoriteMovies.length})</span>
        )}
      </h1>
      {loading ? (
        <div className="text-white text-center">Loading favorites...</div>
      ) : favoriteMovies.length === 0 ? (
        <div className="text-white text-center">No favorite movies found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favoriteMovies.map((movie) => (
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
    </div>
  );
};

export default Favorites;
