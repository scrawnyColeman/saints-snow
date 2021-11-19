import React from "react";

import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 50%;

  margin-top: 1rem;

  @media (max-width: 568px) {
    flex: 100%;
  }
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 12px;

  box-shadow: 0 2px 8px 0 #4b4b4b;

  width: 80%;
  height: 28rem;
  overflow: hidden;
`;

const StyledImageWrapper = styled.div`
  position: relative;

  height: 24rem;
  width: 100%;

  overflow: scroll;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  height: auto;
  width: 100%;
`;

const StyledContent = styled.div`
  height: 4rem;
  width: 100%;
`;

const Product = ({ name, price, mainImg }) => {
  const sendToPay = () => {
    window.location.href = `https://trilo.us/saintssnows/${price.high}`;
  };
  return (
    <StyledWrapper>
      <StyledCard onClick={sendToPay}>
        <StyledImageWrapper>
          <StyledImage width={128} src={mainImg} alt={name} />
        </StyledImageWrapper>
        <StyledContent>
          {name}
          {price.high}
        </StyledContent>
      </StyledCard>
    </StyledWrapper>
  );
};

export default Product;
