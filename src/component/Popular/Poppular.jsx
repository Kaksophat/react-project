
import "./Poppular.css"
import Item from '../Item/Item';
import { useEffect, useState } from "react";

const Popular = () => {
  const [popularproduct,setpopularproduct] = useState([])
 

  const fetchInfo = async () => {
    try {
      const response = await fetch('https://localhost:3000/popularwomen');
      if (!response.status==200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setpopularproduct(data)
      

  
    } catch (error) {
      console.error('Error fetching product data:', error);
    } 
  };

  useEffect(()=>{
    fetchInfo();
  },[])
  return (
    <>
    <div className='popular'>
        <h3>POPULAR IN WOMEN</h3>
        <hr />
       <div className='popular-item'>
          {popularproduct.map((item, i)=>{
           return  <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} 
            old_price={item.old_price}/>
       })}
       </div>
    </div>
    </>
  )
}

export default Popular