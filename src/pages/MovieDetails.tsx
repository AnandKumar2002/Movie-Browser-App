import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getMovieById,
  getMovies,
  isFavorite,
  toggleFavorite,
} from "../services/movieService";
import NoMoviesFound from "../components/NoMoviesFound";
import MovieBox from "../components/MovieBox";
import { useAuth } from "../context/AuthContext";

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

  if (loading)
    return <div className="text-white text-center mt-10">Loading...</div>;

  if (!movie || movie.Response === "False") {
    return <NoMoviesFound />;
  }

  return (
    <div className="p-6 text-gray-100">
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <div className="">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/default-image.jpg"}
            alt={movie.Title}
            className="w-full rounded-lg shadow-md"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              {movie.Title}
            </h1>
            <p className="text-gray-400 mb-2">
              <strong>Genre:</strong> {movie.Genre}
            </p>
            <p className="text-gray-400 mb-2">
              <strong>Director:</strong> {movie.Director}
            </p>
            <p className="text-gray-300 mb-4 line-clamp-3">
              <strong>Plot:</strong> {movie.Plot}
            </p>
            <div>
              <strong className="text-white">Ratings:</strong>
              <ul className="list-disc list-inside">
                {movie.Ratings?.map((rating: any, index: number) => (
                  <li key={index} className="text-gray-300">
                    {rating.Source}: {rating.Value}
                  </li>
                ))}
              </ul>
            </div>
            {/* Favorite Button */}
            <button
              onClick={handleFavoriteToggle}
              className={`mt-4 px-4 py-2 rounded ${
                favorite
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white transition`}
            >
              {favorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Top Movies */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-4">Top Movies</h2>
        {topMovies.length === 0 ? (
          <div className="flex justify-center items-center h-96">
            <NoMoviesFound />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {topMovies.map((movie) => (
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
    </div>
  );
};

export default MovieDetails;
