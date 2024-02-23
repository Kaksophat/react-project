// import React from 'react'
import "./css/loginsingup.css"

 const Loginsingup = () => {
  return (
    <>
      <div className="loginsingup">
          <div className="loginsingup-container">
            <h1>sing up</h1>
            <div className="loginsingup-filed">
              <input type="text" placeholder="your name" />
              <input type="email" placeholder="email address" />
              <input type="password" placeholder="password" />
            </div>
            <button>contiue</button>
            <p className="loginsing-login">Already have an account <span>login here</span></p>
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
