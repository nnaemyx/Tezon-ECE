import React from 'react'
import './Hero.css'
import Image1 from './images/image 1.png'
import Vector from './images/Vector.png'

const Hero = () => {
  return (
    <div>
     <section className="container">
        <div className="row">
          <div className="col_1">
            <div className="hero_text">
              <h2>FACULTY OF ENGINEERING</h2>
              <h1>Department of <span>Electronics</span> and <span>Computer</span> Engineering</h1>
              <img src={Vector} id="vector" alt="vector"/>
              <p>A plug into an Engineering digital library,<br className="hide_on_mobile"/> Let's study.</p>
              <a href="google.com" className="common_red_btn">GET STARTED</a>
            </div>
          </div>
          <div className="col_2">
            <img src={Image1} alt="img1"/>
          </div>
        </div>	
      </section>
    </div>
  )
}

export default Hero