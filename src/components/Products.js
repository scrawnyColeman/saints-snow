import React from "react";
import styled from "styled-components";

import Product from "./Product";

import stock from "../stock.json";

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Products = () => {
  return (
    <StyledWrapper>
      {stock.data.map((item) => (
        <Product
          name={item.name}
          price={item.price}
          mainImg={item.thumbnail.data.absolute_url}
        />
      ))}
    </StyledWrapper>
  );
};

export default Products;
