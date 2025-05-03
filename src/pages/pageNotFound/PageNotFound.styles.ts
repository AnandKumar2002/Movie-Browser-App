import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1f2937;
  color: white;
  text-align: center;
  padding: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    font-size: 2.25rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const HomeButton = styled.button`
  background-color: #facc15;
  color: black;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #fde047;
  }
`;
