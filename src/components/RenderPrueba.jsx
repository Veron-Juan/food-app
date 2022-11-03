import React from 'react'
// import styled from 'styled-components'
// import { Cards, Img, Button, H3, P, Span, SpanHorizintal } from './Carousel'
// import Glider from 'react-glider';
// import 'glider-js/glider.min.css';

function RenderPrueba(props) {
    const {products} = props;

  return (
    
    <>
    <h2>products</h2>
    {products.map((product)=>(
      <div key={product.id} >
        <h3>{product.name}</h3>
      </div>
    ) )}
    </>
  )
}

export default RenderPrueba
