import {store} from "./CartRedux"
import React from "react"
import CartItemCard from "./CartItemCart"
import {useSelector} from "react-redux";

export default function Cart(){
    // console.log("cart............................")
    // console.log(store.getState())
    const cartItems= useSelector(state=>state)

     return (<div>
        <h1> CartItems : {cartItems.length}</h1>
     <div style={{"display":"flex","flexDirection":"row","flexWrap":"wrap"}}> 
        
        {
            cartItems==null || cartItems.length<=0?<h3>Empty</h3>: cartItems.map(
                x=>
                 <div>
                    <CartItemCard obj={x} type="cart-item" />
                 </div>
                )
                
        }
        </div>
    </div>)
}

