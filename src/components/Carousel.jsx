import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Cards = styled.div`
margin: 20px;
height: 135px;
max-width: 220px;
min-width: 150px;
border: 1px solid white;
border-radius: 30px;
box-shadow: 0px 0px 3px 0px black;



`

export const Img = styled.img`
min-width: 180px;
max-width: 340px ;
border-radius: 30px;
`

export const H3 = styled.h3`
margin: 7px 0;
`
export const P = styled.p`
text-align: center;
margin: 7px 0;

`
export const Button = styled.button`
border-radius: 22px;
height: 45px;
width: 45px;
font-size: 24px;
color: white;
background-color: #3f3d3d;
border: none;
cursor: pointer;
&:hover{
  background-color: #1CAF5E;
}
`

export const Span = styled.span`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const SpanHorizintal = styled.span`
display: flex;
justify-content: space-around;
align-items: center;
margin: 7px 0;
`
const Container = styled.div`
display: flex;
width: 100%;
`

const Navink = styled(Link)`
display: flex;
justify-content: center;
outline: none;
text-decoration: none;
color: red;
`


export default function (props){
  const {products, onAdd, onRremove } = props;
  const [food, setFood] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  
    return(


      <>
      <H3>Popular</H3>

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
          
          <Cards  key={product.id}>
          <Img src={product.image} alt={product.name}/>
          <Span>
            <H3>{product.name}</H3>
            <P>descridsa asdjasdd n s sdd sdew </P>
          </Span>
          <SpanHorizintal>
            <P>${product.price}</P>
            <Button onClick={()=> onAdd(product)}>+</Button>
    
          </SpanHorizintal>
        </Cards>
        ))}
      
  
    </Glider> } 
    
    
      

        
      
        
        </>
    )
}