import React from 'react'
import './Hero.css'
import Image1 from './images/image 1.png'
import Vector from './images/Vector.png'

const Hero = () => {
  return (
    <div>
      <section className="hero_container">
        <div className="hero_row">
          <div className="col_1">
            <h2>FACULTY OF ENGINEERING</h2>
            <h1>Department of <span>Electronics</span> and <span>Computer</span> Engineering</h1>
            <p>A plug into an engineering digital library, <br class="hero_hide"/>Let's study.</p>
            <a href="">Get Started</a>
          </div>
          <div className="col_2">
            <img src={Image1}/>
         </div>
        </div>
		  </section>
    </div>
  )
}

export default Hero