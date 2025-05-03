import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 16rem;
  text-align: center;
  color: #4b5563;
`;

export const Icon = styled.svg`
  width: 5rem;
  height: 5rem;
  margin-bottom: 1rem;
  color: #9ca3af;
`;

export const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;

export const Message = styled.p`
  font-size: 0.875rem;
  margin-top: 0.25rem;

  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;
