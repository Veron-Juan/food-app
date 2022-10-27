import styled from "styled-components"
import Glider from 'react-glider';
import 'glider-js/glider.min.css';


const ContainerCategories = styled.div`
max-width: 700px;
margin: 20px auto;
height: 60px;

display: flex;
justify-content: center;
border-radius: 20px;

`
const ContainerCircle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`



const Span = styled.span`
max-width: 50px;
min-width: 50px;
min-height: 50px;
background-color: #d1cbc9;
border-radius: 50px;

font-size: 21px;
margin-right: 15px;


`

const Title = styled.h2`

`
const NameCategory = styled.p`
margin: 0;
font-size: 15px;
font-weight: bold;
text-align: center;


`

export default function Categories(){


    return(
        <>
        <Title>Categories</Title>
        <ContainerCategories>
        <Glider
            draggable
            hasArrows
            hasDots
            slidesToShow={6}
            slidesToScroll={1}
>           
            
            <ContainerCircle>
            <Span></Span>
            <NameCategory>Vegetables</NameCategory>
            </ContainerCircle>
            <ContainerCircle>
            <Span></Span>
            <NameCategory>friots</NameCategory>
            </ContainerCircle>
            <ContainerCircle>
            <Span></Span>
            <NameCategory>Vegetables</NameCategory>
            </ContainerCircle>
            <ContainerCircle>
            <Span></Span>
            <NameCategory>Vegetables</NameCategory>
            </ContainerCircle>
            <ContainerCircle>
            <Span></Span>
            <NameCategory>Vegetables</NameCategory>
            </ContainerCircle>
            <ContainerCircle>
            <Span></Span>
            <NameCategory>Vegetables</NameCategory>
            </ContainerCircle>
            
            
            
        </Glider>

        </ContainerCategories>
        </>
    )
}