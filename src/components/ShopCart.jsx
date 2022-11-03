import React, { useReducer } from 'react'
import styled from 'styled-components'
import { shopInitialState, shopReducer } from '../reducers/ShopReducer'
import ProductItems from './ProductItems';


const Box = styled.article`

`

export default function ShopCart() {
    const [state, dispatch] = useReducer(shopReducer, shopInitialState);

    const {products, cart} = state

    const addToCart = ()=>{};

    const delFromCart = ()=>{};

    const clearCart = ()=>{};
  return (
    <>
    <h2>carrito de compras</h2>
    <h3>Productos</h3>
    <Box>
        {products.map(()=> <ProductItems key={product.id} data={product} addToCart={addToCart} />)}
    </Box>
    </>
  )
}
