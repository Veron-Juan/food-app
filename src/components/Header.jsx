import styled from "styled-components"
import { FaBars } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { useState } from "react";
import {UseCartContext } from "../useContext/Context"
import filter from "../assets/filter.svg"
import { Link } from "react-router-dom";

import Search from "./Search";
import Basket from "./Basket";
import piña from "../assets/icons8-piña.png"



const ContainerHeader = styled.div`
width: 100%;
height: 130px;
position: fixed;
z-index: 500;
top: 0;
left: 0;
display: flex;
flex-direction: column;
align-items: flex-start;
box-shadow: 0.7px 0px 1.9px 0px black;
background-color: white;
/* @media (min-width: 656px) {
    height: 60px;
  } */
  @media (min-width: 648px) {
    height: 100px;
}

`

const StatusHead = styled.div`
background-color: white;
margin-bottom: 10px;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 60px;
margin-top: 5px;

`
const UserAndLocation = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-left: 15px;
margin-top: 5px;

`
const ContLogo = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #272626;
`

const ContUserAndCart = styled.div`
display:flex;
justify-content: center;
align-items: center;
margin-right: 15px;

`

const HeaderNav = styled.header`
width: 100%;
background-color: white;
display: flex;
padding-right: 10px;
padding-left: 10px;
justify-content: space-evenly;
align-items: center;





`

const CountCartAdded = styled.button`
width: 30px;
height: 30px;
border: none;
border-radius: 60px;
background-color: #1CAF5E;
color: white;

`

const ContainerShop = styled.div`
cursor: pointer;
margin-right: 25px;

`
const P = styled.p`
color: gray;
margin: 0 auto;
padding-right: 15px;
`
const IconMenu = styled.img`
cursor: pointer;


&:hover{
    border-radius: 15px;
    box-shadow: 0 0 1.2px 0px black;
}

`

const MenuTogle = styled.div`
background-color: #f6f6f6f8;
    position: absolute;
    top: 62px;
    right: 15px;
    width: 210px;
    height: 100px;
    display: flex;
    justify-content: center;
    z-index: 100;
    border-radius: 12px;
    box-shadow: inset 0 0 2px 0px #b6acac;
    

ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    

    li{
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: light;
    text-align: justify;
    
     a{
        text-decoration: none;
        color: #767171f8;
        &:hover{
            color:#1c1b1bf8;
        }
     }
    
    }
}


`


export default function Header (){
    const { cartItems, mostrar, setMostrar } = UseCartContext();
    const [day, setDay] = useState("")

    const [show, setShow] = useState(false)

    

    function mostrarSaludo(){
 
        const fecha = new Date(); 
        let hora = fecha.getHours();
       
        if(hora >= 0 && hora <= 12){
          setDay("Good morning.")
          
        }
       
        if(hora > 12 && hora <= 20){
            setDay("Good evening.")
          
        }
       
        if(hora > 20 && hora < 24){
            setDay("Good night.")
          
        }
       
        
    }
    return(
        <>
        <ContainerHeader onLoad={mostrarSaludo}>
            <StatusHead>
                <UserAndLocation >
                    <ContLogo to="./">
                    <h2 style={{margin:"0px"}}>Food app</h2> 
                    <img style={{width:"40px"}} src={piña}/>
                    </ContLogo>
                    <P>{day}</P>
                </UserAndLocation>
                <ContUserAndCart>
                
                    
                <ContainerShop >
                <FaShoppingCart onClick={()=> setMostrar(!mostrar)} style={{fontSize:"28px"}} />
                <a href="#">
                     { "" }
                    {cartItems.length? (
                        <CountCartAdded>{cartItems.length}</CountCartAdded>
                    ) : ("") }
                </a>
            </ContainerShop>
            {/* <User></User> */}
            <IconMenu  onClick={()=> setShow(!show)} src={filter}/>
            {show &&
             <MenuTogle>
                <ul>
                    <li><a href="https://github.com/Veron-Juan/food-app" target="_blank">Repository</a></li>
                    <li><a href="https://juanvpdev.vercel.app/" target="_blank">About me</a></li>
                    
                </ul>
            </MenuTogle>}
                </ContUserAndCart>
            </StatusHead>
        <HeaderNav>
            <Search  />
        </HeaderNav>
        </ContainerHeader>

        
        
        
        </>
    )
}