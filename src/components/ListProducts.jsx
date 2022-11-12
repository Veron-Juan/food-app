import React from 'react'
import styled from 'styled-components'
import { useEffect } from 'react'
import {UseCartContext } from "../useContext/Context"
import { ResultsConntain, CardsResults, H2 } from './Results'

function ListProducts() {
    const { products, categories,  onAdd, word, cartItems } = UseCartContext();
    
    let query = new URLSearchParams(window.location.search);

    let productID = query.get('productID');

    const productDetail = products.filter((product)=> product.category === productID);
    console.log(productDetail)
    
  return (
    <>
    <H2>{productID}</H2>
    <ResultsConntain>

            {productDetail.map((product)=>(
                <CardsResults >
                <h3>{product.name}</h3>
                <img style={{width:"85px"}} src={product.image} />
                <p>${product.price}</p>
            </CardsResults>
            ))}
            
            
        
    </ResultsConntain>
    </>
  )
}

export default ListProducts
