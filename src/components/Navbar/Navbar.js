import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <header class="container">
      <div class="nav_container">
        <div class="nav_items">
          <div class="left_side">
            <div class="logo">
              <img src="./src/assests/ECE LOGO (Gradient).png" id="logo" alt="logo"/>
              <h1>E.C.E</h1>
            </div>
          </div>
          <div class="right_side">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Sections</a></li>
              <li><a href="#">Info</a></li>
            </ul>
            <div class="immerse_links">
              <a href="" class="log_in">LOG IN</a>
              <a href="" class="sign_up">SIGN UP</a>
            </div>
          </div>
        </div>
      </div>
  </header>
  </div>
  )
}

export default Navbar