import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {UseCartContext } from "../useContext/Context"
import minus from "../assets/minus.svg"
import union from "../assets/Union.svg"


export const Cards = styled.div`
margin: 10px;
min-height: 214px;
max-height: 330px;
max-width: 250px;
min-width: 210px;
border: 1px solid white;
border-radius: 30px;
position: relative;
/* border: 1px solid green; */
box-shadow: 0px 0px 3px 0px black;
cursor:pointer;
display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const Navink = styled(Link)`
text-decoration: none;
font-weight: 700;
color: #949a97;
&:hover{
  color:#4a4a4a;
  font-weight: bold;
  
}
`

export const Img = styled.img`
/* min-width: 180px; */
width: 60% ;
border-radius: 30px;
/* border: 1px solid red; */
`

export const H3 = styled.h3`
margin: 7px 0;
`
export const P = styled.p`
text-align: center;
margin: 7px 0;
color:#4a4a4a;
font-weight: 300;

`
export const Button = styled.button`
border-radius: 22px;
height: 45px;
width: 45px;
font-size: 24px;
color: white;
background-color: #1CAF5E;
border: none;
z-index: 8000;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
&:hover{
  background-color:#137740;
}
`

const ViewDetail = styled(P)`
position: absolute;
top:0;
right: 12px;
`

export const Span = styled.span`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const SpanHorizintal = styled.span`
display: flex;
justify-content: space-between;
align-items: center;
margin: 7px 0;

width:150px;
`
const Container = styled.div`
display: flex;
width: 100%;
`




export default function (props){
  const { products,  onAdd,  } = UseCartContext();
  
  
  const [loading, setLoading] = useState(true);
  
    return(


      <>
      <h2>Popular</h2>

      {/* LOADING */}
      {loading &&
      <Glider
      draggable
      hasArrows
      hasDots
      slidesToShow={2}
      slidesToScroll={1}
      
      >
        {/* <Navink to="detail" >
          
        </Navink> */}
        {products.map((product)=>(
          <Cards key={product.id} data-product-id={product.id}>
            
            <ViewDetail><Navink to={`/detail?productID=${product.id}`}>View detail</Navink></ViewDetail>
          
            
          <Img  src={product.image} alt={product.name} />
          <Span>
            <H3>{product.name}</H3>
            <P>descridsa asdjasdd n s sdd sdew </P>
            
            
          </Span>
          
        
        <SpanHorizintal>
            <P style={{fontWeight:"bold"}}>${product.price}</P>
            <Button onClick={()=> onAdd(product)}>
            <img style={{width:"17px"}} src={union}/>
            </Button>
          </SpanHorizintal>
        </Cards>
        ))}
  
    </Glider> } 
      
        </>
    )
}