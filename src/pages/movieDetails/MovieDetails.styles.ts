import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem;
  color: #e5e7eb;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Poster = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

export const Label = styled.p`
  color: #9ca3af;
  margin-bottom: 0.5rem;
`;

export const Plot = styled.p`
  color: #d1d5db;
  margin-bottom: 1rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const RatingsList = styled.ul`
  list-style-type: disc;
  padding-left: 1.25rem;
`;

export const RatingItem = styled.li`
  color: #d1d5db;
`;

export const FavoriteButton = styled.button<{ $isFavorite: boolean }>`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background-color: ${(props) => (props.$isFavorite ? "#dc2626" : "#2563eb")};
  color: white;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => (props.$isFavorite ? "#b91c1c" : "#1d4ed8")};
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
`;

export const TopMoviesGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
`;

export const Loader = styled.div`
  text-align: center;
  margin-top: 2.5rem;
  color: white;
`;
