import React from "react";
import styled from "styled-components";

import logo from "../../src/assets/logo.jpeg";

const StyledContainer = styled.div`
  width: 60%;
  margin: 0 auto;

  @media (max-width: 968px) {
    width: 100%;
  }
`;

const StyledHeader = styled.div`
  padding: 1rem;
`;

const PageLayout = ({ children }) => {
  return (
    <StyledContainer>
      <StyledHeader>
        <img src={logo} width={80} />
      </StyledHeader>
      {children}
    </StyledContainer>
  );
};

export default PageLayout;
