import "./Displayproducr.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../Context/Shopcontext";

const Displayproduct = (product1) => {
  const {product} = product1;
  const {addtocart}=useContext(ShopContext)
  return (
    <>
      <div className="displayproduct">
        <div className="displayproduct-left">
          <div className="displayproduct-img-list">
            <img src={product?.image} alt="" />
            <img src={product?.image} alt="" />
            <img src={product?.image} alt="" />
            <img src={product?.image} alt="" />
          </div>
          <div className="displayproduct-img">
            <img
              className="displayproduct-main-img"
              src={product?.image}
              alt=""
            />
          </div>
        </div>
        <div className="displayproduct-right">
          <h1>{product?.name}</h1>
          <div className="displayproduct-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>{122}</p>
          </div>
          <div className="displyproduct-right-price">
            <div className="displayproduct-right-price-old">
              ${product?.old_price}
            </div>
            <div className="displayproduct-right-price-new">
              ${product?.new_price}
            </div>
          </div>
          <div className="displayproduct-right-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a
            facilis iste dolorem sit, eligendi beatae cumque corrupti
            asperiores, inventore error. Consequatur tempore optio odio!
          </div>
          <div className="displayproduct-right-size">
            <h1>select size</h1>
            <div className="displayproduct-right-sizes">
                <div>M</div>
                <div>S</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
          </div>
          <button onClick={()=>{addtocart(product?.id)}}>ADD TO CART</button>
          <p className="displayproduct-right-category"> <span>Category :</span> Women , T-shirt , crop , top</p>
          <p className="displayproduct-right-category"> <span>tags :</span> modern , letest</p>
        </div>
      </div>
    </>
  );
};

export default Displayproduct;
