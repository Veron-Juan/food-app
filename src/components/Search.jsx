import styled from "styled-components"
import { CiSearch } from 'react-icons/ci';

const Buscador = styled.div`
width: 125px;
height: 30px;
border: 1px solid gray;
border-radius: 10px;
display: flex;
justify-content: space-between;
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
            <Input/>
            <CiSearch/>
        </Buscador>

        
        </>
    )
}