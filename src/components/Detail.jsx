import styled from "styled-components"
import { MdArrowBackIosNew } from 'react-icons/md'
import {UseCartContext } from "../useContext/Context"
import { useState } from "react"
import minus from "../assets/minus.svg"
import union from "../assets/Union.svg"
import { useNavigate } from "react-router-dom";

export const ContainerDetail = styled.div`
height: 100%;
width: 100%;
/* box-shadow: inset 0px 0px 5px 0px #00000091; */
z-index: 100;
margin-top: 136px;

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
top: -28px;
left: 9px;
width: 35px;
height: 35px;
border-radius: 35px;
border: none;
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
background-color: #eae5e5;
color: #535151;
cursor: pointer;
@media (max-width: 648px) {
    top:0px
}
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
cursor: pointer;
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

export default function Detail(){

    const back = ()=>{
        window.history.back();
    }
    const history = useNavigate()

    

    let query = new URLSearchParams(window.location.search);

    let productID = query.get('productID');
    // console.log(productID);

    

    const {cartItems, setCartItems, products, onAdd, onRemove, kilo, setKilo, addInDetail  } = UseCartContext();
    
    const productDetailQuantity = cartItems.filter((product)=> product.id === productID)
    const productDetail = products.filter((product)=> product.id === productID);
    const aberconmap = products.map((item)=> item )
   
    
    
    const filterProduct = products.filter((product)=> product.id === productID )
    console.log(filterProduct[0])
    console.log(cartItems.quantity)
    

    const hola = cartItems.filter((product)=> product.id === productID)
    console.log(hola)
    console.log(hola.quantity)

    const chau = hola.map((x)=> x.quantity)
    console.log(chau)
    
    const relatedItems = products.filter((product)=> product.category === productDetail[0].category)
    console.log('relatedItems', relatedItems)
    
    relatedItems.splice(4)
    
    return(
        <>
        
        
        <ContainerDetail>
            <ContainerImgAndBtn>
                <ImageDetail src={productDetail[0].image} />
                <ButtonBack onClick={back}>
                    <MdArrowBackIosNew/>
                </ButtonBack>
            </ContainerImgAndBtn>
            <ContainerTextAndNumbers>
                <TitleDetail>{productDetail[0].name}</TitleDetail>
                <ContainerPriceAndAdd >
                    <Price>${productDetail[0].price}</Price>
                    <AddOrSub>
                        <BtnMore onClick={()=> onRemove(productDetail[0])} ><img style={{width:"17px"}} src={minus}/></BtnMore>
                        <h3 style={{margin:"0 10px"}}> {chau}kg </h3>
                        {/* <h3 style={{margin:"0 10px"}}>{quantityProduct.length !== 0 ? quantityProduct : "0" } kg </h3> */}
                        
                        <BtnMore onClick={()=> onAdd(productDetail[0])}   ><img style={{width:"17px"}} src={union}/></BtnMore>
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
                    {relatedItems.map((item)=>(
                        <Items key={item.id} >
                        <ImageItem src={item.image} onClick={()=> history(`?productID=${item.id}`)} />
                        {item.name}
                        
                    </Items>
                    ))}
                    
                    


                </RelatedItems>
            </ContainerRelatedItems>
        <ContainerAddCart>
        <AddToCart><CartButton onClick={()=> onAdd(productDetail[0])}>Add To Cart</CartButton></AddToCart>
        </ContainerAddCart>
        
        </ContainerDetail>
        
        </>
    )
}