import Modal from '../UI/Modal';
import { useContext, useState } from 'react';
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

const Cart=(props)=>{
    const [isCheckout,setCheckout]=useState(false)
    const cartCtx=useContext(CartContext)
    const hasItems=cartCtx.items.length>0
    const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`
    const cartItems=<ul className={classes['cart-items']}>{cartCtx.items.map((item)=><li>{item.name}</li>)}</ul>;
    const orderHandler=(props)=>{
      setCheckout(true)
    }
   const orderSubmitHandler=(userdata)=>{
     fetch('https://foodapp-8e42b-default-rtdb.firebaseio.com/orders.json',{
        method:'POST',
        body:JSON.stringify({
            user:userdata,
            orderedItems:cartCtx.items
        })
     })
   }

    
    return(
        <Modal onClick={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
          {isCheckout&&<Checkout onConfirm={orderSubmitHandler}></Checkout>} 
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={props.onHideCart}>Cancel</button>
              {hasItems&&!isCheckout&&<button className={classes.button} onClick={orderHandler}>Order</button>}
            </div>
            <div></div>
        </Modal>
    )
};
export default Cart;