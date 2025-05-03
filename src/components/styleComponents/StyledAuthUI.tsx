import styled from "styled-components";

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 0.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
  outline: none;
  color: black;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.4);
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: #2563eb;
  color: white;
  padding: 0.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1e40af;
  }
`;

export const FooterText = styled.p`
  margin-top: 1rem;
  text-align: center;
  font-size: 0.875rem;
`;

export const LinkText = styled.span`
  color: #2563eb;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
