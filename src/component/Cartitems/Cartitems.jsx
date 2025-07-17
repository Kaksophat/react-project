/* eslint-disable react/jsx-key */
// import React from 'react'
import "./Cartitems.css"
import remove_icon from "../Assets/cart_cross_icon.png"
import { useContext } from "react"
import { ShopContext } from "../../Context/Shopcontext"


const CartItem = () => {
  const {allProducts,cartitems,removecart,gettotalcart}= useContext(ShopContext)
  return (
    <>
    <div className="cartitem">
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Titel</p>
        <p>Price</p>
        <p>Quantify</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
     {allProducts.map((e)=>{
        if(cartitems[e.id]>0){
            return  <div>
            <div className="cartitem-format cartitem-format-main">
              <img src={e.image} alt="" className="carticon-product-icon"/>
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className="cartitem-quantify">{cartitems[e.id]}</button>
              <p>${e.new_price*cartitems[e.id]}</p>
              <img src={remove_icon} alt="" onClick={()=>{removecart(e.id)}} className="removecart"/>
            </div>
            <hr />
          </div>
        }
        return null;
     })}
     <div className="cartitems-down">
      <div className="cartitem-total">
        <h1>Cart Totals</h1>
        <div>
          <div className="cart-total-item">
            <p>Subtotal</p>
            <p>${gettotalcart()}</p>
          </div>
          <hr />
          <div className="cart-total-item">
            <p>Shipping Free</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cart-total-item">
            <h3>Total</h3>
            <h3>${gettotalcart()}</h3>
          </div>
        </div>
        <button>PROCEED TO CHECOUT</button>
      </div>
      <div className="cartitem-promocode">
        <p>If you have a promo code, enter it here</p>
        <div className="cartitem-promobox">
          <input type="text" placeholder="Promo code" />
          <button>Submit</button>
        </div>
      </div>
     </div>
    </div>
    </>
  )
}

export default CartItem