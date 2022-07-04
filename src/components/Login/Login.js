import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div>
        <div class="container">

			<div class="content_1" >

				<div class="back_icon" ><a href="" ><i class="fa-solid fa-angle-left"></i></a></div>

				<div class="logo"><img src="src/assests/ECE LOGO (Gradient).png" /><span>E.C.E</span></div>

				<p class="welcome" >Welcome Back</p>

				<div class="header">Get back on <span>track</span></div>

				<div class="form" >

					<form method="post" action=" " autocomplete="on" >

						<input type="email" name="email" placeholder="E-mail" required ><br>

						<input type="password" name="password" placeholder="Password" required><br>

						<p class="forgot" ><a href="" >Forgot password?</a></p>

						<button type="submit" >LOG IN</button>

					</form>

				</div>

			</div>

			<div class="content_2">

				<img src="src/assests/Images/image 3.png" >

			</div>

		</div>
    </div>
  )
}

export default Login
