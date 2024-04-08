import React from 'react'
import './style.css'
const CartComp = ({value}) => {
  return (
    <div className='cart-container'>
        <div className="oneth">
               <p>{value.food}</p>
               <p style={{fontSize:'10px'}}>Quantity({value.quantity})</p>
        </div>
        <p>{value.rs}</p>
        <p>${value.amount}</p>
    </div>
  )
}

export default CartComp