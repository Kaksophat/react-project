import React, { useEffect, useState } from 'react'
import "./Newcollection.css"
import Item from '../Item/Item'

const Newcollection = () => {
  const [Newcollection_image,setnew_collections]= useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/newcollection')
    .then((res)=>res.json())
    .then((data)=>{setnew_collections(data)})
  },[])
  return (
    <>
    <div className="newcollection">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {Newcollection_image.map((item ,i)=>{
                return <Item  key={i}  id={item.id} name={item.name} image={item.image} new_price={item.new_price} 
                old_price={item.old_price}/>
            })}
        </div>
    </div>
    </>
  )
}

export default Newcollection