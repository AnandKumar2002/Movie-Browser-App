import React from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper, Title, Subtitle, HomeButton } from "./PageNotFound.styles";

const PageNotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/home");
  };

  return (
    <Wrapper>
      <Title>Oops! You've taken a wrong turn.</Title>
      <Subtitle>No worries, it happens. Let's get you back on track.</Subtitle>
      <HomeButton onClick={handleGoHome}>Go to Home</HomeButton>
    </Wrapper>
  );
};

export default PageNotFound;
