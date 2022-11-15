import React from 'react'
import styled from 'styled-components'
import { useEffect } from 'react'
import {UseCartContext } from "../useContext/Context"
import { ResultsConntain, CardsResults, H2 } from './Results'
import {Button, SpanHorizintal, Img, H3} from './Carousel'
import {ButtonBack} from './Detail'
import union from "../assets/Union.svg"
import { MdArrowBackIosNew } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ButtonBackResult = styled(ButtonBack)`
top:106px;
left:26px;
@media (max-width: 648px) {
top:135px;
}
`
const Navlink = styled(Link)`
text-decoration: none;
font-weight: 700;
color: #949a97;
position:absolute;
top:0;
right: 15px;

&:hover{
  color:#4a4a4a;
  font-weight: bold;
  
}
`

function ListProducts() {

  const back = ()=>{
    window.history.back();
}

    const { products, categories,  onAdd, word, cartItems } = UseCartContext();
    
    let query = new URLSearchParams(window.location.search);

    let productID = query.get('productID');

    const productDetail = products.filter((product)=> product.category === productID);
    console.log(productDetail)
    
  return (
    <>
    <ButtonBackResult onClick={back}>
      <MdArrowBackIosNew />
    </ButtonBackResult>
    <H2>{productID}</H2>
    <ResultsConntain>
        
            {productDetail.map((product)=>(
                <CardsResults key={product.id} >
                  <Navlink to={`/detail?productID=${product.id}`}>View detail</Navlink>
                <Img style={{width:"85px"}} src={product.image} />
                <H3>{product.name}</H3>
                <SpanHorizintal>
                <p>${product.price}</p>
                <Button onClick={()=> onAdd(product)}>
                <img style={{width:"17px"}} src={union}/>
                </Button>
                </SpanHorizintal>
                
            </CardsResults>
            ))}
            
            
        
    </ResultsConntain>
    </>
  )
}

export default ListProducts
