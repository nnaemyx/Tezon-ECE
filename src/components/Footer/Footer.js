import React from 'react'
import './Footer.css'
import Tezonlogo from './Tezon logo.png'
import Vector2 from './Vector 2.png'

const Footer = () => {
  return (
    <div>
      <section>
        <summary>
          <h2>Get access to everything <span>now</span> <img src="src/assests/images/Vector 2.png"/> <a href="">Sign Up</a></h2>
        </summary>
        <footer>
          <div className ="col_9">
            <img src="src/assests/images/Tezon logo.png"/>
          </div>
          <div className="col_10">
            <h2>This is a project of the Tezon team. Tezon is an 8 man squad from the 200 level students of electronics and computer engineeering</h2>
            <div className="abt_tz">
              <a href="">Contact Us</a>
              <a href="">About Us</a>
            </div>
          </div>
        </footer>
	    </section>
	  </div>
  )
}

export default Footer