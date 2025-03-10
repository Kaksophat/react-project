import {useContext} from 'react'
import dropdown_icon from "../component/Assets/dropdown_icon.png"
import Item from '../component/Item/Item'
import  "./css/Shopcatecory.css";
import { ShopContext } from '../Context/Shopcontext';

const Shopcategory = (props) => {
  const { allProducts} = useContext(ShopContext)
  console.log("hello", allProducts);
  
  return (
    <>
     <div className='shop-category'>
      <img src={props.banner}  className='shopcategory-banner'/>
       <div className='shopcategory-index-sort'>
         <p>
          <span>Showing 1-12</span> out of 36 products
         </p>
         <div className='shopcategory-sort'>
            sort by <img src={dropdown_icon} alt="" />
         </div>
      </div>
      <div className="shopcategory-products">
        { allProducts.map((item,i)=>{
          // eslint-disable-next-line react/prop-types, no-undef
        
          if(props.category === item.category){
            return <Item  key={i}  id={item.id} name={item.name} image={item.image} new_price={item.new_price} 
            old_price={item.old_price} />
          }else{
            return null;
          }
          
        
        })}
      </div> 
      <div className='shopcatecoty-load'>
          explor more
      </div>
     </div>
    </>
  )
}
export default Shopcategory