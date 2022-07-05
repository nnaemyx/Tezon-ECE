import React from 'react'
import './Footer.css'
import Tezonlogo from './Tezon logo.png'
import Vector2 from './Vector 2.png'

const Footer = () => {
  return (
    <div>
      <section className="last_section">
        <div className="container">
          <div className="last_section_text">
            <h1>Get access to <span>everything</span> now</h1>
            <img src={Vector2} alt='vector'/>
            <a href="google.com" className="common_red_btn">SIGN UP</a>
          </div>
        </div>
      </section>
      <footer>
          <div className="footer_content">
            <img src={Tezonlogo} alt="logo"/>
            <div className="footer_text">
              <h1>TEZON</h1>
              <p>This is the project of the Tezon Team, an 8 man squad from the 200lvl students of <br class="hide_on_mobile"/>Electronics and Computer Engineering</p>
              <div className="find_us">
                <a href="google.com">Contact Us</a>
                <a href="google.com">About Us</a>
              </div>
            </div>
          </div>
      </footer>
    </div>
  )
}

export default Footer