import styled from "styled-components"
import { FaBars } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { useState } from "react";
import {UseCartContext } from "../useContext/Context"
import filter from "../assets/filter.svg"

import Search from "./Search";
import Basket from "./Basket";



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
margin-left: 15px;

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
/* top: 0;
left: 0; */
/* position: fixed; */
justify-content: space-evenly;
align-items: center;

/* z-index: 500; */



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
margin: 0;
`

const User = styled.div`
width: 50px;
height: 50px;
border-radius: 50px;
background-color: gray;
`

export default function Header (){
    const { cartItems, mostrar, setMostrar } = UseCartContext();
    const [day, setDay] = useState("")
    

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
                <UserAndLocation>
                    <h2 style={{margin:"0px"}}>Hello, Juan</h2> 
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
            <img src={filter}/>
                </ContUserAndCart>
            </StatusHead>
        <HeaderNav>
            <Search  />
        </HeaderNav>
        </ContainerHeader>

        
        
        
        </>
    )
}