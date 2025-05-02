import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/home");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-800 text-white text-center p-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">
        Oops! You've taken a wrong turn.
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-6">
        No worries, it happens. Let's get you back on track.
      </p>
      <button
        onClick={handleGoHome}
        className="bg-yellow-500 text-black px-6 py-3 rounded-md hover:bg-yellow-400"
      >
        Go to Home
      </button>
    </div>
  );
};

export default PageNotFound;
