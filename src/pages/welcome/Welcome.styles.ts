import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${process.env.PUBLIC_URL + '/movie-background-collage.avif'});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  padding: 2rem;
  color: white;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
`;

export const StyledLink = styled(Link)`
  background-color: #3b82f6;
  color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: 0.375rem;
  font-weight: 500;
  text-decoration: none;
  margin: 0 0.5rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2563eb;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 1.5rem;
`;

export const Illustration = styled.img`
  width: 250px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1.5rem;
`;

