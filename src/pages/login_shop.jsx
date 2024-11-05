// import React from 'react'
import "./css/loginsingup.css"

 const Loginsingup = () => {
 
  return (
    <>
      <div className="loginsingup">
          <div className="loginsingup-container">
            <h1>Login</h1>
            <div className="loginsingup-filed">
              <input style={{color:"black"}} type="text" name="username" placeholder="your name" />
              <input style={{color:"black"}} type="email" name="email" placeholder="email address" />
              <input style={{color:"black"}} type="password" name="password" placeholder="password" />
            </div>
            <butto>contiue</butto>
          
            <p className="loginsing-login"> dont`t Have an account <span>Signup here</span></p>
            <div className="loginsing-agree">
              <input type="checkbox" name="" id="" />
              <p>By contiuing, i agree to the terms of use & privacy policy</p>
            </div>
          </div>
      </div>
    </>
  )
}
export default Loginsingup
