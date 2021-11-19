import React, { useState } from "react";

import styled from "styled-components";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from "styled-dropdown-component";

import cancel from "../../assets/addSymbol.svg";
import arrow from "../../assets/tabArrow.svg";

const sizeMap = {
  S: "Small",
  M: "Medium",
  L: "Large",
  XL: "Extra Large",
  "2XL": "XXLarge",
};
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

  border-radius: 10px;
  /* overflow: scroll; */
`;

const StyledSizing = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  bottom: 0;
  right: 0;

  z-index: 5;

  border-radius: 10px;

  opacity: 0.5;
  background-color: #11171c;
`;
const StyledDropdownWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 10;

  border-radius: 10px;
`;

const StyledDropdown = styled(Dropdown)`
  position: static;
  width: 152px;
  height: 30px;

  /* white */

  background: #ffffff;
  /* dark silver */

  border: 1px solid #bdc3c7;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 4px 16px;
`;

const StyledImage = styled.img`
  height: auto;
  width: auto;
  max-width: 100%;
  max-height: 100%;
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

  font-weight: 600;

  font-size: 12px;

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

const StyledCancelButton = styled.button`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  width: 32px;
  height: 32px;
  margin-right: 8px;

  border: transparent;
`;

const StyledButtonWrapper = styled.div`
  width: 100%;
  display: flex;

  margin-top: 1rem;
`;

const Product = ({ name, price, mainImg, sendToProduct, sizes }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [isHidden, setHidden] = useState(true);
  const [isSizeShown, setSizeShown] = useState(false);
  const { absolute_url, width, height } = mainImg;

  const aspectRatio = 128 / 160;

  const handleClick = () => {
    if (!!sizes.length && !isSizeShown) {
      setSizeShown(true);
      return;
    }

    if (!!sizes.length && selectedSize) {
      sendToProduct(price, `${name} - ${selectedSize}`);
    } else {
      sendToProduct(price, `${name}`);
    }
  };

  let buttonText = "Buy now";

  if (!!sizes.length && isSizeShown) {
    buttonText = "Confirm size";
  }

  const handleOpenCloseDropdown = () => {
    setHidden((prev) => !prev);
  };
  return (
    <StyledCard>
      <StyledImageWrapper>
        {isSizeShown && !!sizes.length && (
          <>
            <StyledSizing />
            <StyledDropdownWrapper>
              <StyledDropdown>
                <button
                  style={{
                    height: "100%",
                    width: "100%",
                    backgroundColor: "transparent",
                    border: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "16px",
                    fontWeight: 400,
                    cursor: "pointer",
                  }}
                  onClick={handleOpenCloseDropdown}
                >
                  {sizeMap[selectedSize] || "Select a size"}
                  <img src={arrow} alt="arrow" />
                </button>
                <DropdownMenu hidden={isHidden} style={{ minWidth: "152px" }}>
                  {sizes.map((size) => (
                    <DropdownItem
                      onClick={() => {
                        setSelectedSize(size.size);
                        setHidden(true);
                      }}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        cursor: "pointer",
                      }}
                    >
                      <span>{size.size}:</span>
                      <span>({size.value})</span>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </StyledDropdown>
            </StyledDropdownWrapper>
          </>
        )}
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
        <StyledPrice>£{Number(price).toFixed(2)}</StyledPrice>
      </StyledTextWrapper>
      <StyledButtonWrapper>
        {isSizeShown && (
          <StyledCancelButton
            onClick={() => {
              setSelectedSize(null);
              setSizeShown(false);
              setHidden(true);
            }}
          >
            <img src={cancel} alt="cancel" />
          </StyledCancelButton>
        )}
        <StyledButton onClick={handleClick}>{buttonText}</StyledButton>
      </StyledButtonWrapper>
    </StyledCard>
  );
};

export default Product;
