import React from 'react'
import './Navbar.css'
import Logo from './ECE LOGO (Gradient).png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <header className="container">
      <div className="nav_container">
        <div className="nav_items">
          <div className="left_side">
            <div className="logo">
              <img src={Logo} id="logo" alt="logo"/>
              <h1>E.C.E</h1>
            </div>
          </div>
          <div className="right_side">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Sections</a></li>
              <li><a href="#">Info</a></li>
            </ul>
            <div className="immerse_links">
              <Link to="/login" class="log_in">LOG IN</Link>
              <Link to="/signup" class="sign_up">SIGN UP</Link>
            </div>
          </div>
        </div>
      </div>
  </header>
  </div>
  )
}

export default Navbar