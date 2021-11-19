import React, { useState } from "react";

import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 30%;
  align-items: flex-start;
  padding: 8px 8px 16px;

  width: 176px;
  height: 215px;

  @media (max-width: 968px) {
    height: 400px;
    flex: 100%;
  }
  /* white */

  background: #ffffff;
  /* box shadow */

  box-shadow: 0px 2px 6px rgba(44, 62, 80, 0.1);
  border-radius: 10px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 1rem 2rem 0;
`;

const StyledImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 128px;
  width: 100%;

  @media (max-width: 968px) {
    height: 300px;
  }
  @media (max-width: 600px) {
    height: 400px;
  }

  border-radius: 10px;
  overflow: scroll;
`;

const StyledImage = styled.img`
  @media (min-width: 968px) {
    position: absolute;
    top: 0%;
    left: 0%;

    height: auto;
    width: auto;
    max-width: 100%;
  }
  @media (max-width: 968px) {
    height: 100%;
    width: auto;
  }
`;

const StyledTextWrapper = styled.div`
  text-align: left;
  margin-top: 4px;

  display: flex;
  flex-direction: column;
`;

const StyledPrice = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;

  /* deep grey */

  color: #707070;
`;

const StyledName = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  color: #11171c;
`;

const StyledButton = styled.button`
  /* Auto Layout */
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7px 16px;

  margin-top: 1rem;

  width: 100%;
  height: 30px;

  /* triloGreen */

  background: #00bfa5;
  /* primary button shadow */

  box-shadow: 0px 4px 10px rgba(22, 160, 133, 0.2);
  border-radius: 8px;

  outline: none;
  border: none;

  color: white;
`;

const Product = ({ name, price, mainImg, sendToProduct }) => {
  const [product, setProduct] = useState(null);
  const { absolute_url, width, height } = mainImg.data;

  const aspectRatio = 128 / 160;

  const handleClick = () => {
    if (product) {
      sendToProduct();
    }
  };
  return (
    <StyledCard>
      <StyledImageWrapper>
        <StyledImage
          width={width}
          height={height}
          src={absolute_url}
          alt={name}
          isShort={width / height < aspectRatio}
        />
      </StyledImageWrapper>
      <StyledTextWrapper>
        <StyledName>{name}</StyledName>
        <StyledPrice>£{Number(price.high).toFixed(2)}</StyledPrice>
      </StyledTextWrapper>
      {product && (
        <StyledButton onClick={() => setProduct(null)}>No</StyledButton>
      )}
      <StyledButton onClick={handleClick}>Buy now</StyledButton>
    </StyledCard>
  );
};

export default Product;
