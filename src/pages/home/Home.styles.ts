import styled from "styled-components";

interface PageButtonProps {
  $isactive: boolean;
}

export const SearchContainer = styled.div`
  margin-bottom: 1.5rem;
`;

export const SearchInput = styled.input`
  padding: 1rem;
  width: 100%;
  border-radius: 0.375rem;
  background-color: #374151;
  color: #ffffff;
  outline: none;
  border: none;

  ::placeholder {
    color: #d1d5db;
  }
`;

export const LoadingText = styled.div`
  color: #ffffff;
  text-align: center;
  font-size: 1.125rem;
`;

export const NoMoviesWrapper = styled.div`
  height: 24rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: white;
`;

export const PaginationButton = styled.button`
  background-color: #4b5563; /* Tailwind's bg-gray-600 */
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: white;
`;

export const PageButton = styled.button<PageButtonProps>`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background-color: ${(props) =>
    props.$isactive ? "#facc15" : "#374151"}; /* yellow-400 or gray-700 */
  color: ${(props) => (props.$isactive ? "black" : "white")};
  font-weight: ${(props) => (props.$isactive ? "bold" : "normal")};
  cursor: pointer;
`;

export const Ellipsis = styled.span`
  color: #9ca3af; /* Tailwind's gray-400 */
  margin-left: 0.5rem;
`;
