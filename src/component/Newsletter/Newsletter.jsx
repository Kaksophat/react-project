import React from 'react'
import "./Newsletter.css"

const Newsletter = () => {
  return (
    <>
    <div className="newsletter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subcribe to our newletter and stay update</p>
        <div className='inputs'>
        <input type="email" placeholder='your email id' />
        <button className='subcribe'>subscribe</button>
        </div>
    </div>
    </>
  )
}

export default Newsletter