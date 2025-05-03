import styled from "styled-components";
import { Link } from "react-router-dom";

// Card container
export const Card = styled.div`
  background-color: #1f2937;
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

// Poster image
export const Poster = styled.img`
  width: 100%;
  height: 16rem;
  object-fit: cover;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
`;

// Year text style
export const Year = styled.p`
  color: #9ca3af;
  margin: 0;
`;

// Actions (buttons) section
export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

// More Info link
export const MoreInfoLink = styled(Link)`
  font-size: 0.875rem;
  background-color: #facc15;
  color: black;
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  text-decoration: none;

  &:hover {
    background-color: #fbbf24;
  }
`;

export const FavoriteButton = styled.button<{ $favorite: boolean }>`
  font-size: 0.875rem;
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid ${({ $favorite }) => ($favorite ? "#facc15" : "white")};
  color: ${({ $favorite }) => ($favorite ? "#facc15" : "white")};
  background-color: transparent;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: white;
    color: black;
  }
`;

// Title style OKay
export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;

  &.favorite {
    color: #facc15;
  }
`;
