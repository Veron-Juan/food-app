import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import { SpanHorizintal,Img,H3 } from './Carousel'
import { Img, H3,SpanHorizintal  } from "../styled-components/Popular";
import {UseCartContext } from "../useContext/Context"
import {ButtonBack} from '../views/Detail'
import { MdArrowBackIosNew } from 'react-icons/md'
import union from "../assets/Union.svg"
import { Link, useNavigate } from 'react-router-dom'
import { ButtonAddOrREMOVE } from '../components/ButtonAddOrREMOVE';
import { Cards } from '../components/Cards';
import swal from 'sweetalert';


const ButtonBackResult = styled(ButtonBack)`
top:106px;
left:26px;

@media (max-width: 648px) {
top:135px;
}
`


export const ResultsConntain = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 30px;
`

export const CardsResults = styled(Cards)`
min-width:159px;
height:160px;
margin: 10px 9px;
justify-content: end;
min-height: 155px;
max-height: 213px;
/* @media (min-width: 531px) {
    
} */

img{
  max-width:85px;
  max-height: 65px;
  
}
`

const ButtonAdd = styled(ButtonAddOrREMOVE)`
z-index: 20;
`
export const H2 = styled.h2`
margin-top:160px;
margin-left:20px;
@media (max-width: 648px) {
margin-top:180px;
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



function Results() {
    
    const { products,  onAdd, word, setWord  } = UseCartContext();
    const [a, b] = useState([])
    const history = useNavigate();

    const back = ()=>{
        window.history.back();
    }
    
    
    useEffect(()=>{
        const showResults = ()=>{
        const productsResults = products.filter((product)=> product.name === word || product.category === word);
        b(productsResults)  
        console.log("effect")
        if(productsResults.length === 0){
            swal({
                title: "No se encontraron resultados",
                
                icon: "warning",
                
                button: {
                  text:"OK",
                  color:"red",
                }
                
              }
              
              )
              
        }
        }
        
        
        showResults()
    },[word])

   

  return (
    <>
    <H2>Results</H2>
    <ButtonBackResult onClick={back} >
        <MdArrowBackIosNew/>
    </ButtonBackResult>
    <ResultsConntain>
        {a.map((i)=>(
            <CardsResults key={i.id}>
                <Navlink to={`/detail?productID=${i.id}`}>View detail</Navlink>
                <img  src={i.image} />
                <H3>{i.name}</H3>
                <SpanHorizintal>
                <p>${i.price}</p>
                <ButtonAdd  onClick={()=> onAdd(i)}>
                    <img src={union}/>
                </ButtonAdd >
                </SpanHorizintal>
            </CardsResults>
        ))}
    </ResultsConntain>
    </>
  )
}
export default Results
