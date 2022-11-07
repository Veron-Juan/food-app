import styled from "styled-components"
import Glider1 from 'react-glider';
import 'glider-js/glider.min.css';
import './categories.css'
import { Link } from "react-router-dom";


const ContainerCategories = styled.div`
/* max-width: 700px; */
margin-bottom: 40px;
height: 100%;
display: flex;
justify-content: center;
border-radius: 20px;

`

const ContainerCircle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-right:-30px;

`

const Span = styled.span`
width: 110px;
height: 110px;
background-color: #d1cbc9;
border-radius: 30px;

font-size: 21px;

`

const ContainerTitlesCategorie = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const Title = styled.h2`
`
const ShowAll = styled.p`
color: #1CAF5E;
font-weight: 600;
margin-right: 5px;
cursor: pointer;
&:hover{
    color: #137740;
}

`
const LinkShow = styled(Link)`
color: #1CAF5E;
font-weight: 600;
text-decoration: none;
margin-right: 5px;
&:hover{
    color: #137740;
}
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
        <ContainerTitlesCategorie>
        <Title>Categories</Title>
        <LinkShow to="/allcategories">Show all</LinkShow>
            
        </ContainerTitlesCategorie>
        <ContainerCategories>
        <Glider1
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
            
            
            
        </Glider1>

        </ContainerCategories>
        </>
    )
}