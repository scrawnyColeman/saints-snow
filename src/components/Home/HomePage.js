import React from "react";
import styled from "styled-components";

import Product from "./Product";

import stock from "../../stock-simplified.json";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
`;

const Products = () => {
  const sendToProduct = (amount, param) => {
    window.open(`https://trilo.us/saintssnow/${amount}/?t=${param}`, "_tab");
  };
  return (
    <StyledWrapper>
      {stock.data.map((item) => (
        <Product
          sendToProduct={sendToProduct}
          name={item.name}
          price={item.price}
          mainImg={item.thumbnail}
          sizes={item.sizes || []}
        />
      ))}
      <div style={{ height: "200px" }}></div>
    </StyledWrapper>
  );
};

export default Products;
