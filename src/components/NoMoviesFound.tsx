import React from "react";

const NoMoviesFound: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-64 text-center text-gray-600">
      <svg
        className="w-20 h-20 mb-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h2 className="text-lg sm:text-xl font-semibold">No Movies Found</h2>
      <p className="text-sm sm:text-base mt-1">
        Try a different search keyword or explore popular titles.
      </p>
    </div>
  );
};

export default NoMoviesFound;
