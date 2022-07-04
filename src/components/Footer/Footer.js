import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <section class="last_section">
        <div class="container">
          <div class="last_section_text">
            <h1>Get access to <span>everything</span> now</h1>
            <img src="./src/assests/images/Vector 2.png"/>
            <a href="" class="common_red_btn">SIGN UP</a>
          </div>
        </div>
      </section>
      <footer>
          <div class="footer_content">
            <img src="./src/assests/images/Tezon logo.png" alt="logo"/>
            <div class="footer_text">
              <h1>TEZON</h1>
              <p>This is the project of the Tezon Team, an 8 man squad from the 200lvl students of <br class="hide_on_mobile"/>Electronics and Computer Engineering</p>
              <div class="find_us">
                <a href="">Contact Us</a>
                <a href="">About Us</a>
              </div>
            </div>
          </div>
      </footer>
    </div>
  )
}

export default Footer