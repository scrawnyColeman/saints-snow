import React from "react";
import styled from "styled-components";

import logo from "../../assets/logo.jpeg";

const StyledHeader = styled.div`
  padding: 1rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} width={160} alt="St Andrews Snow" />
    </StyledHeader>
  );
};

export default Header;
