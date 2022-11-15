import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {UseCartContext } from "../useContext/Context"
import minus from "../assets/minus.svg"
import union from "../assets/Union.svg"


export const Cards = styled.div`
margin: 8px;
padding: 5px 0;
min-height: 185px;
max-height: 213px;
max-width: 190px;
min-width: 160px;
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
// const LinkCard = styled(Link)`
// margin: 10px;
// min-height: 180px;
// max-height: 209px;
// max-width: 210px;
// min-width: 180px;
// border: 1px solid white;
// border-radius: 30px;
// position: relative;
// /* border: 1px solid green; */
// box-shadow: 0px 0px 3px 0px black;
// cursor:pointer;
// display: flex;
//     justify-content: center;
//     flex-direction: column;
//     align-items: center;
//     text-decoration: none;
//     color:black;
// `

export const Img = styled.img`
margin-top:1px;
width: 50% ;
border-radius: 30px;
z-index: -1;
/* border: 1px solid red; */
`

export const H3 = styled.h3`
margin: 1px 0;
`
export const P = styled.p`
text-align: center;
margin: 7px 0;
color:#4a4a4a;
font-weight: 300;
margin: 1px;

`
export const Button = styled.button`
border-radius: 22px;
height: 36px;
width: 36px;
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
width:150px;

margin-top: -8px;
`
const Container = styled.div`
display: flex;
width: 100%;
`




export default function (props){
  const { products,  onAdd,  } = UseCartContext();
  
  
  const [loading, setLoading] = useState(true);

  const populares = products.filter((product)=> product.popular)
  
  // const aleatorio = populares[Math.floor(Math.random())];
  

  
  
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
        {populares.map((product)=>(
          <Cards  key={product.id} data-product-id={product.id}>
            
            <ViewDetail><Navink   to={`/detail?productID=${product.id}`}>View detail</Navink></ViewDetail>
          
            
          <Img  src={product.image} alt={product.name} />
          <Span>
            <H3>{product.name}</H3>
            <P>Fruit</P>
            
            
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