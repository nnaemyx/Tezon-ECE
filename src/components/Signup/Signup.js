import React from 'react'
import './Signup.css'
import Logo from '../Navbar/ECE LOGO (Gradient).png'
import Image2 from './image 2.png'

const Signup = () => {
  return (
    <div>
        <div className="container_signup">

			<div className="content_1" >

				<div className="back_icon" ><a href="google.com" ><i className="fa-solid fa-angle-left"></i></a></div>

				<div className="logo"><img src={Logo} alt='ece' /><span>E.C.E</span></div>

				<p className="get_started" >Get started</p>

				<div className="header">Create an <span>account</span></div>

				<div className="form" >

					<form method="post" action=" " autocomplete="on" >

						<input type="textbox" name="fullname" placeholder="Full name" required/><br/>

						<input type="email" name="email" placeholder="E-mail" required /><br/>

						<input type="password" name="password" placeholder="Password" required/><br/>

						<button type="submit" >SIGN UP</button>

					</form>

				</div>

				<div className="or" ><hr/><span>OR</span><hr/></div>

				<div className="google" ><a href="google.com" ><i className="fa-brands fa-google"></i><span>Sign up with Google</span></a></div>

				<p className="login" >Already have an account? <a href="google.com" >LOG IN</a></p>

			</div>

			<div className="content_2">

				<img src={Image2} alt='ima'/>

			</div>

		</div>
    </div>
  )
}

export default Signup
