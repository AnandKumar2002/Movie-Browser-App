import axios from "axios";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

const getMovies = async (searchTerm: string, page: number = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        s: searchTerm,
        page,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movies: ", error);
    return { Search: [] };
  }
};

const getMovieById = async (id: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        i: id,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details: ", error);
    return null;
  }
};

const getFavoriteMoviesByUser = async (email: string): Promise<any[]> => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "{}");
  const favoriteIds: string[] = favorites[email] || [];

  if (favoriteIds.length === 0) return [];

  const moviePromises = favoriteIds.map((id) => getMovieById(id));
  const movies = await Promise.all(moviePromises);
  return movies.filter((movie) => movie && movie.Response !== "False");
};

const isFavorite = (email: string, movieId: string): boolean => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "{}");
  const userFavorites = favorites[email] || [];
  return userFavorites.includes(movieId);
};

const toggleFavorite = (email: string, movieId: string): boolean => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "{}");
  const userFavorites = new Set(favorites[email] || []);

  if (userFavorites.has(movieId)) {
    userFavorites.delete(movieId);
  } else {
    userFavorites.add(movieId);
  }

  favorites[email] = Array.from(userFavorites);
  localStorage.setItem("favorites", JSON.stringify(favorites));

  return userFavorites.has(movieId); 
};

export { getMovies, getMovieById, getFavoriteMoviesByUser, isFavorite, toggleFavorite};
