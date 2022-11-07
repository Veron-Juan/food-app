import styled from "styled-components"
import { Button, Cards } from "./Carousel";
import { ContainerDetail } from "./Detail";
import {UseCartContext } from "../useContext/Context"
import { AiOutlineClose } from 'react-icons/ai';
import minus from "../assets/minus.svg"
import union from "../assets/Union.svg"

const Menu = styled(ContainerDetail)`
width: 355px;
top: 0px;
transform: ${({open})=> open ? "translateX(0)" : "translateX(-200vw)"};
transition: .5s all ease;
margin-left: -6px;
/* right: ${({open})=> open ? "0" : "-300%"}; */

z-index: 10000;


background-color: white;

position: fixed;
overflow: scroll;
height: -webkit-fill-available;

transition: 0.7 all ease ;

`
const Aber = styled.div`
display:flex;
flex-direction: column;

`


const CardItems = styled.div`
width: 300px;
height: 126px;
display: flex;
justify-content: space-evenly;
align-items: center;
border-radius: 30px;
box-shadow: 0px 0px 3px 0px black;

margin: 20px auto;


`
const ConteinerText = styled.div`
display: flex;
flex-direction: column;
align-items: space-around;
padding-left: 20px;
gap: -1px;

`

const TotalPrices = styled.div`
display: flex;
flex-direction: column;
align-items: space-around;
padding-left: 20px;
`

const ButtonCart = styled(Button)`
width: 28px;
height: 28px;
font-size: 15px;
background-color: #1CAF5E;
margin: 0 8px;
&:hover{
    opacity: .8;
}
`

const ConteinerPrices = styled.div`
display:flex;
align-items: center;
width:180px;

`
const ConeinerDetialPrice = styled.div`
display:flex;
justify-content: space-between;
width: 90%;

`

const TitleItems = styled.p`
font-weight: bold;
margin: 5px 0;
`
const ButtonPay = styled.button`
width: 260px;
height: 40px;
border-radius: 29px;
border:none;
background-color: #1CAF5E;
color:white;
margin: 10px auto;
cursor:pointer;
&:hover{
    opacity: .96;
}
`

const HeaderBasket = styled.div`
display:flex;
align-items: center;
`

const IconClose = styled.span`
font-size: 20px;
font-weight: bold;
position:absolute;
right:8px;
top:18px;
color:gray;
cursor:pointer;
&:hover{
    transform: scale(1.2);
    /* font-size: 24px; */
    color:black; 
}
`


const Basket = () => {
    const { cartItems, onAdd, onRemove, mostrar, setMostrar } = UseCartContext();
    // const {mostrar} = props;
    const itemsPrice = cartItems.reduce((a,c)=> a + c.price * c.quantity,0 )
    const totalPrice = itemsPrice;
    
    
  return (
    <>
    <Menu open={mostrar}>
        <HeaderBasket>
        <h2 style={{margin:"10px"}}>Cart items</h2>
        <IconClose>
            <AiOutlineClose onClick={()=> setMostrar(!mostrar)}/>
        </IconClose>
        </HeaderBasket>
        
            
            {cartItems.length === 0 && <p>cart is empty</p>}
            {cartItems.map((item)=>(
                <CardItems key={item.id}>
                    <img style={{width:"40px", height:"40px"}} src={item.image}/>
                    
                    <ConteinerText>
                        <TitleItems >{item.name}</TitleItems>
                        fruit
                        <ConteinerPrices >
                            ${item.price.toFixed(2)}
                            <ButtonCart onClick={()=> onRemove(item)}> <img style={{width:"17px"}} src={minus}/> </ButtonCart>
                            {item.quantity}
                            <ButtonCart onClick={()=> onAdd(item)}> <img style={{width:"17px"}} src={union}/> </ButtonCart>
                            
                        </ConteinerPrices>
                        
                    </ConteinerText>
                    <div>
                        
                    </div>
                </CardItems>
            ))}
            {cartItems.length !== 0 && (
                <>  
                    <TotalPrices>
                        <h3>Bill Details</h3>
                        <ConeinerDetialPrice>
                            <h3>Items Price</h3>
                            <p>${itemsPrice.toFixed(2)}</p>                  
                        </ConeinerDetialPrice>
                        <ConeinerDetialPrice>
                            <h3>Total Price</h3>
                            <p>${totalPrice.toFixed(2)}</p>
                        </ConeinerDetialPrice>

                        <ButtonPay>Pay now!</ButtonPay>
                    </TotalPrices>
                    
                    <div>
                        
                    </div>
                </>
            )}
        
    </Menu>
    
    </>
  )
}

export default Basket
