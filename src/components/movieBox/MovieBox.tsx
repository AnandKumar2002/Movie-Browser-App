import React, { useState, useEffect } from "react";
import { isFavorite, toggleFavorite } from "../../services/movieService";
import { useAuth } from "../../context/AuthContext";
import {
  Actions,
  Card,
  FavoriteButton,
  MoreInfoLink,
  Poster,
  Title,
  Year,
} from "./MovieBox.styles";

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
    <Card>
      <Poster
        src={poster !== "N/A" ? poster : "/default-image.jpg"}
        alt={title}
      />
      <Title className={favorite ? "favorite" : ""}>{title}</Title>
      <Year>{year}</Year>
      <Actions>
        <MoreInfoLink to={`/movie/${movieID}`}>More Info</MoreInfoLink>
        <FavoriteButton onClick={handleToggleFavorite} $favorite={favorite}>
          {favorite ? "★ Favorite" : "☆ Favorite"}
        </FavoriteButton>
      </Actions>
    </Card>
  );
};

export default MovieBox;
