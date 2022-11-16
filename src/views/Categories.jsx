import styled from "styled-components"
import Glider1 from 'react-glider';
import 'glider-js/glider.min.css';
import './categories.css'
import { Link } from "react-router-dom";
import {UseCartContext } from "../useContext/Context"
import { useNavigate } from "react-router-dom";


const ContainerCategories = styled.div`
/* max-width: 700px; */

margin-bottom: 44px;
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
margin-top: 6px;
margin-bottom: 2px;
&:hover{
    transform: scale(1.06);
    transition: 0.4s;
}
`

const Span = styled.span`
width: 110px;
height: 110px;
z-index: 10;

font-size: 21px;

cursor: pointer;

`
const Image = styled.img`
width: 100%;
height: 100%;
border-radius: 30px;
object-fit: cover;

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
const LinkCard = styled(Link)`

width: 110px;
height: 110px;
box-shadow: 0px 0px 1px 0px;
border-radius: 30px;


`

const NameCategory = styled.p`
margin: 0;
font-size: 15px;
font-weight: bold;
text-align: center;
`

export default function Categories(){

    const { products, categories    } = UseCartContext();
    const history = useNavigate()

    const handleProduct = ()=>{
        history(`products?keyword=${keyword}`)
    }


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
            {categories.map((category)=>(
                <ContainerCircle key={category.id} data-product-id={category.name}>
                    <LinkCard to={`/products?productID=${category.name}`}>
                    <Span>
                        <Image src={category.image}/>  
                    </Span>
                    </LinkCard>
                    <NameCategory>{category.name}</NameCategory>
                </ContainerCircle>
                ))}  
        </Glider1>

        </ContainerCategories>
        </>
    )
}