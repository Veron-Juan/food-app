import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Cards } from './Carousel'
import {UseCartContext } from "../useContext/Context"


export const ResultsConntain = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 30px;
`

export const CardsResults = styled(Cards)`
width:100px;
height:160px;
/* @media (min-width: 531px) {
    
} */
`
export const H2 = styled.h2`
margin-top:130px;
margin-left:20px;
`



function Results() {
    
    const { products,  onAdd, word, setWord  } = UseCartContext();
    const [a, b] = useState([])
    
    // let url = new URLSearchParams(window.location.search);
    // let keyword = url.get("keyword");
    
    useEffect(()=>{
        const showResults = ()=>{
        const productsResults = products.filter((product)=> product.name === word);
        b(productsResults)  
        console.log("effect")
        }
        
        showResults()
    },[word])

   

  return (
    <>
    <H2>Results</H2>
    <ResultsConntain>
        {a.map((i)=>(
            <CardsResults key={i.id}>
                <h3>{i.name}</h3>
                <img style={{width:"85px"}} src={i.image} />
                <p>${i.price}</p>
            </CardsResults>
        ))}
    </ResultsConntain>
    </>
  )
}
export default Results
