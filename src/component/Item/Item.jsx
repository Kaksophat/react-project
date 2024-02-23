
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
   <>
   <div className="Item" >
   <Link to={`/product/${props.id}`}> <img src={props.image}/> </Link>
    <p>{props.name}</p>
    <div className='Item-price'>
     <div className="Item-new-price">
        ${props.new_price}
     </div>
     <div className="Item-old-price">
        ${props.old_price}
     </div>
    </div>
   </div>
   </>
  )
}

export default Item