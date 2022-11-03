import styled from 'styled-components'
import React from 'react'


const Main = styled.div`
width: 190px;
height: 500px;
background-color: #616120;
position: absolute;
top: 60px;
right: ${({open})=> open ? "0" : "-190px"};
transition: 0.5 all ease;
`

function Sidebar(props) {
    // const {showCart} = props;
  return (
    <div>
        {/* <Main open={showCart}/> */}
        
    </div>
  )
}

export default Sidebar
