import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  padding: 1rem;
`;

const Header = () => {
  return (
    <StyledFooter>
      All items are <b>store pickup</b>. Collected at: University of St Andrews
      Snowsports. University Park, St Andrews, SCT
    </StyledFooter>
  );
};

export default Header;
