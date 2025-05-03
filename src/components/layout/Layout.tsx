import React, { ReactNode, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  AppTitle,
  DropdownItem,
  DropdownMenu,
  Footer,
  Header,
  HeaderContent,
  LogoutButton,
  Main,
  PageContainer,
  ProfileButton,
  StyledNavLink,
} from "./Layout.styles";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const appName = process.env.REACT_APP_APP_NAME || "App";
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <PageContainer>
      <Header>
        <HeaderContent>
          <AppTitle to="/home">{appName}</AppTitle>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              position: "relative",
            }}
          >
            <StyledNavLink to="/favorites">Favorites</StyledNavLink>

            {/* Profile Dropdown */}
            <div ref={dropdownRef} style={{ position: "relative" }}>
              <ProfileButton onClick={() => setDropdownOpen(!dropdownOpen)}>
                Profile
              </ProfileButton>
              {dropdownOpen && (
                <DropdownMenu>
                  <DropdownItem>
                    <div className="truncate">{user?.email}</div>
                  </DropdownItem>
                  <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
                </DropdownMenu>
              )}
            </div>
          </div>
        </HeaderContent>
      </Header>

      <Main>{children}</Main>

      <Footer>
        &copy; {currentYear} {appName}. Created by Anand Kumar.
      </Footer>
    </PageContainer>
  );
};

export default Layout;
