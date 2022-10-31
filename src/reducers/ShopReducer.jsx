import { TYPES } from "../actions/ShopAction";

export const shopInitialState = {
    products:[
        {id:1,name:"Product 1",price:100},
        {id:2,name:"Product 2",price:200},
        {id:3,name:"Product 3",price:300},
        {id:4,name:"Product 4",price:400},
        {id:5,name:"Product 5",price:500},
        {id:6,name:"Product 6",price:600},
    ],
    cart:[] //carrito de compras vacio
}

export function shopReducer(state, action){
    switch (action.type) {
        case TYPES.ADD_TO_CART:{
            
        }
        case TYPES.REMOVE_ONE_FROM_CART:{

        }
        case TYPES.REMOVE_ALL_FROM_CART:{

        }
        case TYPES.CLEAR_CART:{

        }
        default:
            return state;    
           
    }
}