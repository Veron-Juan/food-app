import styled from "styled-components"
import { MdArrowBackIosNew } from 'react-icons/md'

import { ContainerDetail } from "./Detail"
import {ButtonBack} from "./Detail"
import { TitleDetail } from "./Detail"
import {UseCartContext } from "../useContext/Context"
import { Link } from "react-router-dom";




const ContainerCategories = styled(ContainerDetail)`
margin-top: 130px;
@media (min-width: 656px) {
    margin-top: 100px;
}
`
const LinkBox = styled(Link)`
width: 90%;
height: 110px;
margin: 20px auto;
border: 1px solid #E8ECF2;
border-radius: 14px;
text-decoration: none;
color: black;
/* box-shadow: inset 0px 0px 3px black; */
display: flex;
align-items: center;
justify-content: space-evenly;
cursor:pointer;
&:hover{
    transform: scale(1.05);
    transition: 0.6s;
}
`


const BoxProduct = styled.div`
width: 90%;
height: 110px;
margin: 20px auto;
border: 1px solid #E8ECF2;
border-radius: 14px;
/* box-shadow: inset 0px 0px 3px black; */
display: flex;
align-items: center;
justify-content: space-evenly;
cursor:pointer;
&:hover{
    transform: scale(1.05);
    transition: 0.4s;
}
`

const ContainerTop = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
position:relative;
margin: 0 auto;
height: 60px;
width:90%;



`
const Back = styled(ButtonBack)`
position: absolute;

left: -12px;
`

const ImgProduct = styled.img`
width: 90px;
height: 90px;
border-radius: 14px;

`

const ContainerText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const TitleCategories = styled.h3`
margin: 0;
`
const ItemsCategories = styled.p`
color: #817f7f;
`

export default function AllCateogories(){

    const back = ()=>{
        window.history.back();
    }

    const { products, categories    } = UseCartContext();

    return(
        <>
        <ContainerCategories>
            <ContainerTop>
                <Back onClick={back} >
                    <MdArrowBackIosNew/>
                </Back>
                <TitleDetail>Categories</TitleDetail>
            </ContainerTop>
            {categories.map((category)=>(
                <LinkBox to={`/products?productID=${category.name}`} data-product-id={category.name}>
                    
                        <ImgProduct src={category.image}/>
                        <ContainerText>
                            <TitleCategories>{category.name}</TitleCategories>
                            <ItemsCategories>8 items</ItemsCategories>
                </ContainerText>
                
                </LinkBox> 
                
                ))}  
            
            
            
        </ContainerCategories>
        </>
    )
}