import React from 'react'
import './Navbar.css'
import Logo from './ECE LOGO With TEXT.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav>
      <div className="nav_container">
        <img src={Logo} class="logo" alt='logo'/>
        <div class="right_side">
          <ul>
            <li><a href="google.com">Home</a></li>
            <li><a href="google.com">Sections</a></li>
            <li><a href="google.com">Info</a></li>
          </ul>
          <Link to='/login'>
            <a href='/' className="log">LOG IN</a>
          </Link>
          <Link  to='/signup'>
            <a href='/' className="sign">SIGN UP</a>
          </Link>
         
       </div>
      </div>
	  </nav> 
  </div>
  )
}

export default Navbar