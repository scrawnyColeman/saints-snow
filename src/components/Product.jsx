import React from 'react'

const Product = ({ name, price, mainImg}) => {
    return (
        <div>
            {name}
            {price.high}
            <img width={128} src={mainImg}/>
        </div>
    )
}

export default Product
