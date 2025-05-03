import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

// Container for entire page layout
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// Header styles
export const Header = styled.header`
  background-color: #1f2937;
  color: white;
  padding: 1rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80rem;
  margin: 0 auto;
`;

export const AppTitle = styled(Link)`
  font-size: 1rem;

  @media (min-width: 640px) {
    font-size: 1.5rem;
  }

  font-weight: bold;
  text-decoration: none;
  color: white;
`;

// Nav link for favorites
export const StyledNavLink = styled(NavLink)`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: background-color 0.2s;

  &.active {
    background-color: #facc15;
    color: black;

    &:hover {
      background-color: #fbbf24;
    }
  }

  &:not(.active) {
    background-color: #374151;
    color: white;

    &:hover {
      background-color: #4b5563;
    }
  }
`;

// Dropdown profile button
export const ProfileButton = styled.button`
  background-color: #374151;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  color: white;

  &:hover {
    background-color: #4b5563;
  }
`;

// Dropdown content
export const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  width: 12rem;
  background-color: white;
  color: black;
  border-radius: 0.375rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export const DropdownItem = styled.div`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #e5e7eb;
  font-size: 0.875rem;

  .truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.75rem;
  }
`;

export const LogoutButton = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  text-align: center;
  color: #dc2626;

  &:hover {
    background-color: #fee2e2;
    border-radius: 0.375rem;
  }
`;

export const Main = styled.main`
  flex: 1;
  padding: 1rem;
  background-color: #111827;
`;

export const Footer = styled.footer`
  background-color: #1f2937;
  color: white;
  padding: 1rem;
  margin-top: auto;
  text-align: center;
  font-size: 0.875rem;

  @media (min-width: 640px) {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;
