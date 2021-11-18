import React from 'react'

const Product = ({ name, price, mainImg}) => {
    const sendToPay = () => {
        window.location.href = `https://trilo.us/thomas/${price.high}`;
    }
    return (
        <div onClick={sendToPay}>
            {name}
            {price.high}
            <img width={128} src={mainImg} alt={name}/>
        </div>
    )
}

export default Product
