import  { useContext, useRef, useState } from "react";
import "./index.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/Shopcontext";
import { IoIosArrowDropdown } from "react-icons/io";
const Navbar = () => {
  const [menu, setmenu] = useState();
  const {gettotalcartitem}= useContext(ShopContext);
  const menuref = useRef();
  const dropdown=(e)=>{
      menuref.current.classList.toggle("nav-menu-vis");
      e.target.classList.toggle("open");
  }
  return (
    <>
      <div className="Navbar">
        <div className="navbar-logo">
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </div>
        <IoIosArrowDropdown className="nav-dropdown" onClick={dropdown}/>
        <ul ref={menuref} className="nav-menu">
          <li
            onClick={() => {
              setmenu("shop");
            }}
          >
            <Link style={{textDecoration:"none"} } to={"/"}>shop</Link> {menu === "shop" ? <hr/> : <></>}
          </li>
          <li
            onClick={() => {
              setmenu("menus");
            }}
          >
            <Link style={{textDecoration:"none"} } to={"/mens"}>Men</Link> {menu === "menus" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setmenu("womens");
            }}
          >
            {" "}
            <Link style={{textDecoration:"none"} } to={"/womens"}>Women</Link>{" "}
            {menu === "womens" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setmenu("kids");
            }}
          >
            <Link style={{textDecoration:"none"} } to={"/kids"}>kid</Link>
            {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          <Link to={"/login"}><button>login</button></Link> 
         <Link to={"/cart"}><img src={cart_icon} alt="" /></Link> 
          <div className="nav-cart-count">{gettotalcartitem()}</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
