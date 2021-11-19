import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Routing from "./Routing";

const StyledContainer = styled.div`
  width: 60%;
  margin: 0 auto;

  @media (max-width: 968px) {
    width: 100%;
  }
`;

const PageLayout = () => {
  return (
    <>
      <Header />
      <StyledContainer>
        <Routing />
      </StyledContainer>
    </>
  );
};

export default PageLayout;
