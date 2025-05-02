import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isFavorite, toggleFavorite } from "../services/movieService";
import { useAuth } from "../context/AuthContext";

interface MovieBoxProps {
  title: string;
  year: string;
  poster: string;
  movieID: string;
}

const MovieBox: React.FC<MovieBoxProps> = ({
  title,
  year,
  poster,
  movieID,
}) => {
  const { user } = useAuth();
  const userEmail = user?.email;

  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    // Check if the movie is already marked as favorite for the logged-in user
    if (userEmail) {
      setFavorite(isFavorite(userEmail, movieID));
    }
  }, [userEmail, movieID]);

  const handleToggleFavorite = () => {
    if (!userEmail) return; // Ensure the user is logged in
    const updated = toggleFavorite(userEmail, movieID);
    setFavorite(updated); // Update the state after toggle
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md flex flex-col">
      <img
        src={poster !== "N/A" ? poster : "/default-image.jpg"}
        alt={title}
        className="w-full h-64 object-cover rounded-md mb-4"
      />

      <h2
        className={`text-xl font-bold truncate ${
          favorite ? "text-yellow-400" : "text-white"
        }`}
        title={title}
      >
        {title}
      </h2>

      <p className="text-gray-400">{year}</p>

      <div className="flex justify-between items-center mt-4">
        <Link
          to={`/movie/${movieID}`}
          className="text-sm bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-400"
        >
          More Info
        </Link>

        <button
          onClick={handleToggleFavorite}
          className={`text-sm px-3 py-1 rounded border ${
            favorite
              ? "border-yellow-500 text-yellow-500"
              : "border-white text-white"
          } hover:bg-white hover:text-black transition`}
        >
          {favorite ? "★ Favorite" : "☆ Favorite"}
        </button>
      </div>
    </div>
  );
};

export default MovieBox;
