import styled from "styled-components"
import { MdArrowBackIosNew } from 'react-icons/md'

export const ContainerDetail = styled.div`
height: 100%;
width: 100%;
box-shadow: inset 0px 0px 5px 0px #00000091;
z-index: 100;

`

const ContainerImgAndBtn = styled.div`

position: relative;
display: flex;
justify-content: center;
height: 320px;

`
const ImageDetail = styled.img`
object-fit: cover;
min-width: 300px;

height: 100%;
z-index: -1;

/* border: 1px solid red; */

`

export const ButtonBack = styled.button`
position: absolute;
top: 12px;
left: 9px;
width: 35px;
height: 35px;
border-radius: 35px;
border: none;
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
color: #535151;
box-shadow: inset 0px 0px 2px 0px #00000091;
cursor: pointer;
`

const ContainerTextAndNumbers = styled.div`

`
const ContainerPriceAndAdd = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const TitleDetail = styled.h2`
margin: 6px 0 4px 10px;
`

export const Price = styled.p`
font-size: 21px;
font-weight: bold;
margin-left: 10px;
`

const AddOrSub = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-right: 10px;

`  

const BtnMore = styled.span`
width: 30px;
height: 30px;
border-radius: 30px;
background-color: #1CAF5E;
font-size: 35px;
display: flex;
align-items: center;
justify-content: center;
color: white;
cursor: pointer;
`

const DescriptionContainer = styled.div`
`
const DescriptionTex = styled.p`
margin-left: 10px;
font-size: 19px;

`

const ContainerRelatedItems = styled.div`

`
const RelatedItems = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Items = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin-right: 5px;
`
const ImageItem = styled.img`
width: 64px;
height: 64px;
border-radius:10px;
`


const ContainerAddCart = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;

`

const AddToCart = styled.div`
min-width: 310px;
border: none;
height: 50px;
background-color: #1CAF5E;
border-radius: 30px;
margin: 20px 0;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
&:hover {
    /* box-shadow: inset -2px -1px 3px black; */
    transform: scale(1.03);
  }
`
const CartButton = styled.p`
color: white;
font-size: 20px;
background-color: #1CAF5E;
`

export default function(){
    return(
        <>
        <ContainerDetail>
            <ContainerImgAndBtn>
                <ImageDetail src="https://i.blogs.es/120994/brocoli/1366_2000.jpg"/>
                <ButtonBack>
                    <MdArrowBackIosNew/>
                </ButtonBack>
            </ContainerImgAndBtn>
            <ContainerTextAndNumbers>
                <TitleDetail>Brocolli</TitleDetail>
                <ContainerPriceAndAdd >
                    <Price>$8.99</Price>
                    <AddOrSub>
                        <BtnMore>-</BtnMore>
                        <h3 style={{margin:"0 10px"}}>1 kg</h3>
                        <BtnMore>+</BtnMore>
                    </AddOrSub>
                </ContainerPriceAndAdd>
                <DescriptionContainer>
                    <TitleDetail>Description</TitleDetail>
                    <DescriptionTex>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates atque itaque voluptatem magnam.</DescriptionTex>
                </DescriptionContainer>
            </ContainerTextAndNumbers>

            <ContainerRelatedItems>
                <TitleDetail>Related items</TitleDetail>
                <RelatedItems>
                    <Items>
                        <ImageItem src="https://static4.depositphotos.com/1017505/320/i/950/depositphotos_3201839-stock-photo-three-tomatoes.jpghttps://static4.depositphotos.com/1017505/320/i/950/depositphotos_3201839-stock-photo-three-tomatoes.jpg"/>
                        Tomatos
                    </Items>
                    <Items>
                        <ImageItem src="https://static4.depositphotos.com/1017505/320/i/950/depositphotos_3201839-stock-photo-three-tomatoes.jpghttps://static4.depositphotos.com/1017505/320/i/950/depositphotos_3201839-stock-photo-three-tomatoes.jpg"/>
                        Tomatos
                    </Items>
                    <Items>
                        <ImageItem src="https://static4.depositphotos.com/1017505/320/i/950/depositphotos_3201839-stock-photo-three-tomatoes.jpghttps://static4.depositphotos.com/1017505/320/i/950/depositphotos_3201839-stock-photo-three-tomatoes.jpg"/>
                        Tomatos
                    </Items>
                    <Items>
                        <ImageItem src="https://static4.depositphotos.com/1017505/320/i/950/depositphotos_3201839-stock-photo-three-tomatoes.jpghttps://static4.depositphotos.com/1017505/320/i/950/depositphotos_3201839-stock-photo-three-tomatoes.jpg"/>
                        Tomatos
                    </Items>
                    <Items>
                        <ImageItem src="https://static4.depositphotos.com/1017505/320/i/950/depositphotos_3201839-stock-photo-three-tomatoes.jpghttps://static4.depositphotos.com/1017505/320/i/950/depositphotos_3201839-stock-photo-three-tomatoes.jpg"/>
                        Tomatos
                    </Items>


                </RelatedItems>
            </ContainerRelatedItems>
        <ContainerAddCart>
        <AddToCart><CartButton>Add To Cart</CartButton></AddToCart>
        </ContainerAddCart>
        



        </ContainerDetail>
        
        </>
    )
}