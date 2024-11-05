
import "./Poppular.css"
import Item from '../Item/Item';
import popularwomen from "../Assets/data"
const Popular = () => {
  return (
    <>
    <div className='popular'>
        <h3>POPULAR IN WOMEN</h3>
        <hr />
       <div className='popular-item'>
          {popularwomen.map((item, i)=>{
           return  <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} 
            old_price={item.old_price}/>
       })}
       </div>
    </div>
    </>
  )
}

export default Popular
