import styled from "styled-components"
import { CiSearch } from 'react-icons/ci';

const Buscador = styled.div`
width: 229px;
height: 38px;
border: 1px solid gray;
border-radius: 10px;
display: flex;
padding-left: 10px;
align-items: center;
`
const Input = styled.input`
width: 90px;
background: none;
border-color: transparent;
outline: none;
`




export default function Search(){
    return(
        <>
        <Buscador>
            <CiSearch/>
            <Input placeholder="Search..."/>
        </Buscador>

        
        </>
    )
}