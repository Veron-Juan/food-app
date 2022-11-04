import { useState, createContext, useContext } from "react";
import data from '../data'

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const { products } = data;
    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
        const exist = cartItems.find(x => x.id === product.id); // esta constante exist filtra y guarda si hay objetos repetidos
        if(exist) { // si hat alguno:
          //para agregar uno mas al carrito porque se supone que ya hay uno en el array
          setCartItems(cartItems.map(x => x.id === product.id ? {...exist, quantity: exist.quantity + 1} : x))
          
          // console.log(exist)
        } else {
            setCartItems([...cartItems, {...product, quantity: 1}]) //un array con sus elementos desactruados =  [array q ya esta (si es q hay),  {nuevo array, con quantuty:1}]
          // console.log(cartItems);
          // console.log(product)
        }
        
      }
      const onRemove = (product)=> {
        const exist = cartItems.find(x => x.id === product.id);
        if(exist.quantity === 1){
            setCartItems(cartItems.filter((x) =>x.id !== product.id));
        } 
        else{
            setCartItems(cartItems.map(x => x.id === product.id ? {...exist, quantity: exist.quantity - 1} : x))
        }
      }



    return(
        <CartContext.Provider value={{cartItems, setCartItems, products, onAdd, onRemove}}>
            {children}
        </CartContext.Provider>
    )
}

export const UseCartContext = () => useContext(CartContext);