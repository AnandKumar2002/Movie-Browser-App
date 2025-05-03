import React from "react";
import { StyledContainer, Title, Subtitle, StyledLink, ButtonContainer, Illustration } from "./Welcome.styles";

export default function Welcome() {
  return (
    <StyledContainer>
      <Illustration src={`${process.env.PUBLIC_URL}/movie-background-collage.avif`} alt="Welcome Illustration" />
      <Title>Welcome to Movie Browser</Title>
      <Subtitle>Explore, discover, and favorite your best-loved movies.</Subtitle>
      <p>Please login or register to continue using the website.</p>
      <ButtonContainer>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/register">Register</StyledLink>
      </ButtonContainer>
    </StyledContainer>
  );
}
