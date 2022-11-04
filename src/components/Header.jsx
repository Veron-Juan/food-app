import styled from "styled-components"
import { FaBars } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { useState } from "react";
import {UseCartContext } from "../useContext/Context"


import Search from "./Search";
import Basket from "./Basket";
import Sidebar from "./Sidebar";


const ContainerHeader = styled.div`
width: 100%;
height: 60px;
position: fixed;
z-index: 500;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: flex-start;
box-shadow: 2px 0px 4px 0px black;

`

const HeaderNav = styled.header`
width: 1200px;
height: 60px;
background-color: white;
display: flex;
padding-right: 10px;
padding-left: 10px;
/* top: 0;
left: 0; */
/* position: fixed; */
justify-content: space-between;
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

`


export default function Header (props){
    const { cartItems } = UseCartContext();
    const {mostrar} = props;
    const {setMostrar} = props

    return(
        <>
        <ContainerHeader>
        <HeaderNav>
            <FaBars style={{fontSize:"28px"}} />
            <Search/>
            <ContainerShop >
                <FaShoppingCart onClick={()=> setMostrar(!mostrar)} style={{fontSize:"28px"}} />
                <a href="#">
                     { "" }
                    {cartItems.length? (
                        <CountCartAdded>{cartItems.length}</CountCartAdded>
                    ) : ("") }
                </a>
            </ContainerShop>
        </HeaderNav>
        </ContainerHeader>

        
        
        
        </>
    )
}