import React from "react";
import styled from "styled-components";

import logo from "../../src/assets/logo.jpeg";

const StyledHeader = styled.div`
  padding: 1rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} width={160} />
    </StyledHeader>
  );
};

export default Header;
