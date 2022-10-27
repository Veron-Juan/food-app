import styled from "styled-components"
import { FaBars } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';


import Search from "./Search";





const HeaderNav = styled.header`
width: 100%;
height: 60px;

display: flex;

justify-content: space-between;
`


export default function Header (){
    return(
        <>
        <HeaderNav>
            <FaBars style={{fontSize:"28px"}} />
            <Search/>
            <FaShoppingCart style={{fontSize:"28px"}} />
            
        </HeaderNav>
        </>
    )
}