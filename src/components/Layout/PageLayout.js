import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "../Home/HomePage";

const StyledContainer = styled.div`
  width: 70%;
  margin: 0 auto;

  @media (max-width: 968px) {
    width: 100%;
  }
`;

const PageLayout = () => (
  <>
    <Header />
    <StyledContainer>
      <HomePage />
    </StyledContainer>
    <Footer />
  </>
);

export default PageLayout;
