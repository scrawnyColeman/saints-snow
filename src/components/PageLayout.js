import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 75%;
  margin: 0 auto;

  @media (max-width: 968px) {
    width: 100%;
  }
`;

const PageLayout = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default PageLayout;
