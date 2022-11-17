import styled from "styled-components";
import swal from 'sweetalert';
import { ContainerDetail } from "../views/Detail";
import { UseCartContext } from "../useContext/Context";
import { AiOutlineClose } from "react-icons/ai";
import minus from "../assets/minus.svg";
import union from "../assets/Union.svg";
import close from "../assets/close.svg";
import { ButtonAddOrREMOVE } from "./ButtonAddOrREMOVE";
import { useNavigate, Navigate } from "react-router-dom";

const Menu = styled(ContainerDetail)`
  width: 355px;
  top: -6px;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-200vw)")};
  transition: 0.5s all ease;
  margin-left: -6px;
  /* right: ${({ open }) => (open ? "0" : "-300%")}; */

  z-index: 10000;

  background-color: white;

  position: fixed;
  overflow: scroll;
  height: -webkit-fill-available;

  transition: 0.7 all ease;
  box-shadow: inset 0 0 1px black;
  @media (min-width: 656px) {
    width: 655px;
    top: -35px;
  }
`;

const CardItems = styled.div`
  width: 300px;
  height: 126px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 30px;
  box-shadow: 0px 0px 3px 0px black;

  margin: 20px auto;
`;
const ConteinerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  padding-left: 20px;
  gap: -1px;
`;

const TotalPrices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  padding-left: 20px;
`;

const ButtonCart = styled(ButtonAddOrREMOVE)`
  width: 28px;
  height: 28px;
  font-size: 15px;
  background-color: #1caf5e;
  margin: 0 8px;
  &:hover {
    opacity: 0.8;
  }
`;

const ConteinerPrices = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
`;
const ConeinerDetialPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const TitleItems = styled.p`
  font-weight: bold;
  margin: 5px 0;
`;
const ButtonPay = styled.button`
  width: 260px;
  height: 40px;
  border-radius: 29px;
  border: none;
  background-color: #1caf5e;
  color: white;
  margin: 10px auto;
  cursor: pointer;
  &:hover {
    opacity: 0.96;
  }
`;

const HeaderBasket = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconClose = styled.span`
  font-size: 20px;
  font-weight: bold;
  /* position:absolute;
right:8px;
top:18px; */
  margin-right: 10px;
  color: gray;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    /* font-size: 24px; */
    color: black;
  }
`;

const Basket = () => {
  const history = useNavigate();
  const { cartItems, onAdd, onRemove, mostrar, setMostrar } = UseCartContext();
  // const {mostrar} = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  const totalPrice = itemsPrice;

  const alerswet = ()=>{
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "info",
        buttons: true,
        
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
          setTimeout(() => {
            history(`./`)
            window.location.reload()
          }, 1000);
          
          
            
          
          
        } 
      });
  }

  return (
    <>
      <Menu open={mostrar}>
        <HeaderBasket>
          <h2 style={{ margin: "10px" }}>Cart items</h2>
          <IconClose>
            <img src={close} onClick={() => setMostrar(!mostrar)} />
          </IconClose>
        </HeaderBasket>

        {cartItems.length === 0 && (
          <p style={{ textAlign: "center" }}>cart is empty</p>
        )}
        {cartItems.map((item) => (
          <CardItems key={item.id}>
            <img style={{ width: "40px", height: "40px" }} src={item.image} />

            <ConteinerText>
              <TitleItems>{item.name}</TitleItems>
              fruit
              <ConteinerPrices>
                ${item.price.toFixed(2)}
                <ButtonCart onClick={() => onRemove(item)}>
                  {" "}
                  <img style={{ width: "17px" }} src={minus} />{" "}
                </ButtonCart>
                {item.quantity}
                <ButtonCart onClick={() => onAdd(item)}>
                  {" "}
                  <img style={{ width: "17px" }} src={union} />{" "}
                </ButtonCart>
              </ConteinerPrices>
            </ConteinerText>
            <div></div>
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

              <ButtonPay onClick={alerswet}>Pay now!</ButtonPay>
            </TotalPrices>

            <div></div>
          </>
        )}
      </Menu>
    </>
  );
};

export default Basket;
