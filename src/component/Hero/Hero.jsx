// import React from 'react'
import "./Hero.css"
import Hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <>
    <div className="Hero">
        <div className="Hero-left">
            <h2>NEEW ARRIVALS ONLY</h2>
            <div className="hand-hand-icon">
                <p>NEW</p>
                <img src={Hand_icon} alt="" />
            </div>
            <p>Collections</p>
            <p>for everyone</p>
            <div className="hero-latest-btn">
                <div>latest collections</div>
                <img src={arrow} alt="" />
            </div>
        </div>
        <div className="Hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
    </>
  )
}

export default Hero