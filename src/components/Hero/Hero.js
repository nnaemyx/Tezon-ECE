import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div>
     <section class="container">
        <div class="row">
          <div class="col_1">
            <div class="hero_text">
              <h2>FACULTY OF ENGINEERING</h2>
              <h1>Department of <span>Electronics</span> and <span>Computer</span> Engineering</h1>
              <img src="./src/assests/images/vector.png" id="vector" alt="vector"/>
              <p>A plug into an Engineering digital library,<br class="hide_on_mobile"/> Let's study.</p>
              <a href="" class="common_red_btn">GET STARTED</a>
            </div>
          </div>
          <div class="col_2">
            <img src="./src/assests/images/image 1.png" alt="img1"/>
          </div>
        </div>	
      </section>
    </div>
  )
}

export default Hero