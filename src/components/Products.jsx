import React from 'react'
import stock from '../stock.json';
import Product from './Product';

const Products = () => {
    return stock.data.map((item) => <Product name={item.name} price={item.price} mainImg={item.thumbnail.data.absolute_url} />)
}

export default Products
