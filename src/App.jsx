
// import './App.css'
import Navbar from './component/Navbar'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

import Shop from './pages/shop'
import Shopcategory from './pages/shopcategory'
import Cart from './pages/cart'
import Loginsingup from './pages/login_shop'
import men_banner from "./component/Assets/banner_mens.png"
import women_banner from "./component/Assets/banner_women.png"
import kid_banner from "./component/Assets/banner_kids.png"
import Footer from './component/Footer/Footer'
import Product1 from './pages/Product1'


import "./App.css"
  function App() {
  return(
    <>
   <BrowserRouter>
    <Navbar />
    
    <Routes>
      <Route path='/' element={<Shop />}/>
      <Route path='/mens' element={<Shopcategory banner={men_banner}  type="men"/>}/>
      <Route path='/womens' element={<Shopcategory banner={women_banner} type="women"/>}/>
      <Route path='/kids' element={<Shopcategory banner={kid_banner} type="kid"/>}/>
      <Route path='/product/:productid' element={<Product1/>}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/login' element={<Loginsingup/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
