import React from "react";
import styled from "styled-components";

import Product from "./Product";

import stock from "../../stock.json";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
`;

const Products = () => {
  const [product, setProduct] = useState(initialState);
  const sendToProduct = () => {};
  return (
    <StyledWrapper>
      {stock.data.map((item) => (
        <Product name={item.name} price={item.price} mainImg={item.thumbnail} />
      ))}
      <div style={{ height: "200px" }}></div>
    </StyledWrapper>
  );
};

export default Products;
