
import React from "react";
import "./Breadcrum.css"
import Breadcrum_arrow from "../Assets/breadcrum_arrow.png"

const Breadcrum = ({product}) => {
          
  return (
    <React.Fragment>
     <div className="breadcrum">
        HOME <img src={Breadcrum_arrow} alt="icon" /> SHOP <img src={Breadcrum_arrow} alt="icon" /> {product.type} <img src={Breadcrum_arrow} alt="icon" /> {product.name}
     </div>
    </React.Fragment>
  )
}

export default Breadcrum;