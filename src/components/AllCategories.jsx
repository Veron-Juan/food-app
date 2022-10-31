import styled from "styled-components"
import { MdArrowBackIosNew } from 'react-icons/md'

import { ContainerDetail } from "./Detail"
import {ButtonBack} from "./Detail"
import { TitleDetail } from "./Detail"




const ContainerCategories = styled(ContainerDetail)`
padding: 5px 0;
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
    return(
        <>
        <ContainerCategories>
            <ContainerTop>
                <ButtonBack >
                    <MdArrowBackIosNew/>
                </ButtonBack>
                <TitleDetail>Categories</TitleDetail>
            </ContainerTop>
            <BoxProduct>
                <ImgProduct src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/LJDE2JQXCREZLNYXHWEXDITQVY.jpg"/>
                <ContainerText>
                    <TitleCategories>Frutas</TitleCategories>
                    <ItemsCategories>8 items</ItemsCategories>
                </ContainerText>
            </BoxProduct>
            <BoxProduct>
                <ImgProduct src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/LJDE2JQXCREZLNYXHWEXDITQVY.jpg"/>
                <ContainerText>
                    <TitleCategories>Frutas</TitleCategories>
                    <ItemsCategories>8 items</ItemsCategories>
                </ContainerText>
            </BoxProduct>
            <BoxProduct>
                <ImgProduct src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/LJDE2JQXCREZLNYXHWEXDITQVY.jpg"/>
                <ContainerText>
                    <TitleCategories>Frutas</TitleCategories>
                    <ItemsCategories>8 items</ItemsCategories>
                </ContainerText>
            </BoxProduct>
            <BoxProduct>
                <ImgProduct src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/LJDE2JQXCREZLNYXHWEXDITQVY.jpg"/>
                <ContainerText>
                    <TitleCategories>Frutas</TitleCategories>
                    <ItemsCategories>8 items</ItemsCategories>
                </ContainerText>
            </BoxProduct>
            <BoxProduct>
                <ImgProduct src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/LJDE2JQXCREZLNYXHWEXDITQVY.jpg"/>
                <ContainerText>
                    <TitleCategories>Frutas</TitleCategories>
                    <ItemsCategories>8 items</ItemsCategories>
                </ContainerText>
            </BoxProduct>
            
            
        </ContainerCategories>
        </>
    )
}