import React from 'react'
import './Navbar.css'
import Logo from './ECE LOGO With TEXT.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <header className="container">
        <div className="nav_container">
          <div className="nav_items">
            <div className="left_side">
              <img src={Logo} className="logo" alt="logo"/>
            </div>
            <div className="right_side">
              <ul>
                <li><a href="google.com">Home</a></li>
                <li><a href="google.com">Sections</a></li>
                <li><a href="google.com">Info</a></li>
              </ul>
              <div className="immerse_links">
                <Link to="/login" className="log_in">LOG IN</Link>
                <Link to="/signup" className="sign_up">SIGN UP</Link>
              </div>
            </div>
          </div>
        </div>
      </header>

     <nav>
        <div className="nav_container">
          <img src={Logo} class="logo"/>
          <div class="right_side">
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Sections</a></li>
              <li><a href="">Info</a></li>
            </ul>
            <a href="" className="log">LOG IN</a>
            <a href="" className="sign">SIGN UP</a>

          </div>
        </div>
	  </nav> 
  </div>
  )
}

export default Navbar