import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <div>
        <div class="container_signup">

			<div class="content_1" >

				<div class="back_icon" ><a href="" ><i class="fa-solid fa-angle-left"></i></a></div>

				<div class="logo"><img src="src/assests/ECE LOGO (Gradient).png" /><span>E.C.E</span></div>

				<p class="get_started" >Get started</p>

				<div class="header">Create an <span>account</span></div>

				<div class="form" >

					<form method="post" action=" " autocomplete="on" >

						<input type="textbox" name="fullname" placeholder="Full name" required><br>

						<input type="email" name="email" placeholder="E-mail" required ><br>

						<input type="password" name="password" placeholder="Password" required><br>

						<button type="submit" >SIGN UP</button>

					</form>

				</div>

				<div class="or" ><hr><span>OR</span><hr></div>

				<div class="google" ><a href="" ><i class="fa-brands fa-google"></i><span>Sign up with Google</span></a></div>

				<p class="login" >Already have an account? <a href="" >LOG IN</a></p>

			</div>

			<div class="content_2">

				<img src="src/assests/Images/image 2.png" >

			</div>

		</div>
    </div>
  )
}

export default Signup
