import React from "react";
import {
  Container,
  Icon,
  Title,
  Message
} from "./NoMoviesFound.styles";

const NoMoviesFound: React.FC = () => {
  return (
    <Container>
      <Icon fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </Icon>
      <Title>No Movies Found</Title>
      <Message>Try a different search keyword or explore popular titles.</Message>
    </Container>
  );
};

export default NoMoviesFound;
