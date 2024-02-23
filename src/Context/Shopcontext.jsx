import { createContext, useState } from "react";
import all_product from '../component/Assets/all_product'
// import { PropTypes } from "react";


export const  ShopContext= createContext(null)
 const getCart=()=>{
       let Cart = {};
       for(let index =0; index < all_product.length; index++){
        Cart[index]=0;
       }
       return Cart;
 }
const ShopContextprovider= (props)=>{
    const [cartitems, setcartiems] = useState(getCart());

    const addtocart=(itemid)=>{
        setcartiems((prev)=>({...prev,[itemid]:prev[itemid]+1}));
    }
    const removecart=(itemid)=>{
        setcartiems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }
    const gettotalcart= ()=>{
        var totalamout = 0;
        for (const item in cartitems){
            if(cartitems[item]>0){
                let iteminfo = all_product.find((product)=>product.id===Number(item))
                totalamout += iteminfo.new_price * cartitems[item];
            }
        }
        return totalamout;
    }
    const gettotalcartitem=()=>{
        let totalitem=0;
        for(const item in cartitems){
            if(cartitems[item]>0){
                totalitem+=cartitems[item]
            }
        }
        return totalitem;
    }
    const Contextvalue= {all_product,cartitems,addtocart,removecart,gettotalcart,gettotalcartitem}

    return(
        <ShopContext.Provider value={Contextvalue} >           
            {props.children}
        </ShopContext.Provider>

    )

}
export default ShopContextprovider