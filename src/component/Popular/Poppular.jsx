import React from 'react'
import "./Poppular.css"
import Data_product from "../Assets/data";
import Item from '../Item/Item';

const Popular = () => {
  return (
    <>
    <div className='popular'>
        <h3>POPULAR IN WOMEN</h3>
        <hr />
       <div className='popular-item'>
          {Data_product.map((item, i)=>{
            return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} 
            old_price={item.old_price}/>
          })}
       </div>
    </div>
    </>
  )
}

export default Popular