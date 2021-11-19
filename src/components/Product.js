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

  cursor: pointer;

  padding: 1rem;

  border-radius: 1rem;

  box-shadow: 0 0 4px 0 #00bfa5;

  width: 80%;
  height: 28rem;
  overflow: hidden;

  @media (max-width: 968px) {
    width: 90%;
  }
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

const StyledTextWrapper = styled.div`
  height: 4rem;
  width: 100%;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
`;

const StyledPrice = styled.div`
  text-align: center;
  margin-top: 0.5rem;

  font-weight: bold;
`;

const StyledName = styled.div`
  font-size: 1.25rem;

  text-align: center;
  margin-top: 0.5rem;
`;

const Product = ({ name, price, mainImg }) => {
  const sendToPay = () => {
    window.location.href = `https://trilo.us/saintssnow/${price.high}`;
  };
  return (
    <StyledWrapper>
      <StyledCard onClick={sendToPay}>
        <StyledImageWrapper>
          <StyledImage width={128} src={mainImg} alt={name} />
        </StyledImageWrapper>
        <StyledTextWrapper>
          <StyledName>{name}</StyledName>
          <StyledPrice>£{Number(price.high).toFixed(2)}</StyledPrice>
        </StyledTextWrapper>
      </StyledCard>
    </StyledWrapper>
  );
};

export default Product;
