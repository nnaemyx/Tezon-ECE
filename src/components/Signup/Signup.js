import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <!DOCTYPE html>

<html>

	<head>

		<title>Signup</title>

		<meta charset="utf-8" />

		<link rel="stylesheet" type="text/css" href="Signup.css">

		<meta name="viewport" content="width=device-width,initial-scale=1.0">

		<script src="https://kit.fontawesome.com/2dab97b508.js" crossorigin="anonymous"></script>

	</head>

	<body>

		<div class="container">

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

				<p class="login" >Already have an account? <a href="components/Login/Login.js" >LOG IN</a></p>

			</div>

			<div class="content_2">

				<img src="src/assests/Images/image 2.png" >

			</div>

		</div>

	</body>

</html>
  )
}

export default Signup
