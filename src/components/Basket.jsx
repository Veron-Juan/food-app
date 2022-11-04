import styled from "styled-components"
import { Button, Cards } from "./Carousel";
import { ContainerDetail } from "./Detail";

const Menu = styled(ContainerDetail)`
width: 355px;
top:60px;
right: ${({open})=> open ? "0" : "-300%"};

z-index: 10000;


background-color: white;

position: fixed;
overflow: scroll;
height: -webkit-fill-available;
transition: 0.8 all ease ;

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
const Basket = (props ) => {
    const {cartItems, onAdd, onRemove} = props;
    const {showCart} = props;
    const {mostrar} = props
    const itemsPrice = cartItems.reduce((a,c)=> a + c.price * c.quantity,0 )
    const totalPrice = itemsPrice
    
    

    
  return (
    <>
    <Menu open={mostrar}>
        <h2 style={{textAlign:"center"}}>Cart items</h2>
            
            {cartItems.length === 0 && <p>cart is empty</p>}
            {cartItems.map((item)=>(
                <CardItems key={item.id}>
                    <img style={{width:"40px", height:"40px"}} src={item.image}/>
                    
                    <ConteinerText>
                        <TitleItems >{item.name}</TitleItems>
                        fruit
                        <ConteinerPrices >
                            ${item.price.toFixed(2)}
                            <ButtonCart onClick={()=> onRemove(item)}>-</ButtonCart>
                            {item.quantity}
                            <ButtonCart onClick={()=> onAdd(item)}>+</ButtonCart>
                            
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