import {useReducer} from 'react'

import CartContext from "./cart-context";
const defaultCartState={
    items:[],
    totalAmount:0
}
const CartReducer=(state,action)=>{
    if(action.type==='ADD')
    {
      const updatedItems=state.items.concat(action.item)
      const updatesTotalAmount=state.totalAmount+action.item.price*action.item.amount
      return {
        items:updatedItems,
        totalAmount:updatesTotalAmount
      }
    }
    return defaultCartState;
}
const CartProvider=(props)=>{
const[cartState,dispatchCartAction]=useReducer(CartReducer,defaultCartState);
const addItemCartHandler=(item)=>{
dispatchCartAction({type:'ADD',item:item});
}
const removeCartHandler=(id)=>{
dispatchCartAction({
    type:'REMOVE',
    id:id
})
}
    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemCartHandler,
        removeItem:removeCartHandler
    }
return(
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
)
};
export default CartProvider;