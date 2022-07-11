import React from 'react'
import './Navbar.css'
import Logo from './ECE LOGO With TEXT.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav>
      <div className="nav_container">
        <img src={Logo} className="logo"/>
        <div className="right_side">
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