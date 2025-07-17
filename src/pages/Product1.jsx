import { useContext } from "react"
import { useParams } from "react-router-dom"
import Breadcrum from "../component/Breadcrum/Breadcrum"
import Displayproduct from "../component/Displayproduct/Displayproduct"
import { ShopContext } from "../Context/Shopcontext"
const Product1 = () => {
  // const {product1}= props
    const {allProducts} = useContext(ShopContext);
    
   const {productid} = useParams();
   const product =allProducts.find((e)=> e.id === Number(productid))
   console.log(product);
   
   return (
    <>
   <Breadcrum       product={product}/>
    <Displayproduct  product={product}/> 
     
    </>
  )
}

export default Product1