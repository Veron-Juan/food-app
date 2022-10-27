import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

export const Cards = styled.div`
margin: 20px;
height: 135px;
max-width: 400px;
min-width: 180px;
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


export default function (){

  const [food, setFood] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  // const getFood = async ()=>{
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '81c3a0ed8fmsh2dffa92d6665b29p1a704ajsn07c65d4072c2',
  //       'X-RapidAPI-Host': 'burgers1.p.rapidapi.com'
  //     }
  //   };
  //   try{
  //     setLoading(true)
  //     const res = await fetch('https://burgers1.p.rapidapi.com/burgers?limit=9', options)
  //     const foodData = await res.json()
  //     console.log(foodData)
  //     setFood(foodData)
  //   }
  //   catch{
  //     error(setError)
  //   }
  //   finally{
  //     setLoading(false)
  //   }
  // }


  // useEffect(()=>{
  //   getFood()
    
  // }, [])
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
      <Cards>
      <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU'/>
      <Span>
        <H3>Milanesa</H3>
        <P>descridsa asdjasdd n s sdd sdew </P>
      </Span>
      <SpanHorizintal>
        <P>$15</P>
        <Button>+</Button>

      </SpanHorizintal>
    </Cards>
      <Cards>
      <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU'/>
      <Span>
        <H3>Milanesa</H3>
        <P>descridsa asdjasdd n s sdd sdew </P>
      </Span>
      <SpanHorizintal>
        <P>$15</P>
        <Button>+</Button>

      </SpanHorizintal>
    </Cards>
      <Cards>
      <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU'/>
      <Span>
        <H3>Milanesa</H3>
        <P>descridsa asdjasdd n s sdd sdew </P>
      </Span>
      <SpanHorizintal>
        <P>$15</P>
        <Button>+</Button>

      </SpanHorizintal>
    </Cards>
      <Cards>
      <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU'/>
      <Span>
        <H3>Milanesa</H3>
        <P>descridsa asdjasdd n s sdd sdew </P>
      </Span>
      <SpanHorizintal>
        <P>$15</P>
        <Button>+</Button>

      </SpanHorizintal>
    </Cards>
  
    </Glider> } 
    
    
      

        {/* <Glider
      draggable
      hasArrows
      hasDots
      slidesToShow={2}
      slidesToScroll={1}
      >
        {food && food.map((comidas)=>{
          return(
            <Cards>
      <Img src='https://www.clarin.com/img/2022/04/08/el-doble-medallon-de-carne___KUdGeJ2eE_2000x1500__1.jpg' />
      <Span>
        <H3>Milanesa</H3>
        <P>descridsa asdjasdd n s sdd sdew </P>
      </Span>
      <SpanHorizintal>
        <P>$15</P>
        <Button>+</Button>

      </SpanHorizintal>
    </Cards>
          )
        })}
      
      
  
    </Glider> */}
      
        
        </>
    )
}