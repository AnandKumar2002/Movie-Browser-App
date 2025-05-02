import React, { ReactNode, useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

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

  // Close dropdown on outside click
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
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/home" className="sm:text-2xl text-md font-bold">
            {appName}
          </Link>
          <div className="flex items-center space-x-4 relative">
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition ${
                  isActive
                    ? "bg-yellow-500 text-black hover:bg-yellow-400"
                    : "bg-gray-700 hover:bg-gray-600"
                }`
              }
            >
              Favorites
            </NavLink>

            {/* Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Profile
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                  <div className="px-4 py-2 border-b border-gray-200 text-sm">
                    {/* <strong>Email:</strong> */}
                    <div className="truncate text-xs">{user?.email}</div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 hover:bg-red-100 text-red-600 text-center"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 bg-gray-50 p-6">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 mt-auto">
        <div className="text-center text-sm sm:text-base md:text-lg">
          &copy; {currentYear} {appName}. Created by Anand Kumar.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
