import React, { useState } from 'react'
import styled from 'styled-components'
import { Cards } from './Carousel'
import {UseCartContext } from "../useContext/Context"


const ResultsConntain = styled.div`

display:flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 30px;
`

const CardsResults = styled(Cards)`
width:100px;
height:160px;
/* @media (min-width: 531px) {
    
} */
`
const H2 = styled.h2`
margin-top:130px;
margin-left:20px;
`



function Results() {

    let query = new URLSearchParams(window.location.search);

    console.log(query.get("keyword"))

    let keyword = query.get("keyword");

    // const [palabra, setPalabra] = useState([]);

    const { products,  onAdd,  } = UseCartContext();

    const productsResults = products.filter((product)=> product.name === keyword)

    const pro = productsResults.map((x)=> {
        return(x)
    })

    console.log(pro)
  return (
    <>
    <H2>Results</H2>
    <ResultsConntain>
        {pro.map((i)=>(

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
