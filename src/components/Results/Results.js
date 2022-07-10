import React from 'react'

import './Results.css'
import Image6 from './image 6.png'

import './Login.css'
import Image3 from './image 3.png'
import Logo from '../Navbar/ECE LOGO With TEXT.png'



const Login = () => {
  return (
    <div>
      <section className="result" style="background-image: url(src/assests/images/Oval.png);">
        <div className="result_container"> 
          <div className="result_row">
            <div className="col_7">
              <img src="src/assests/images/image 6.png"/>
            </div>
            <div className="col_8">
              <h1>Get your personal semester <span>results</span> here with just one click</h1>
              <p>Don't worry only You can see Your own result. Visit the <a href="" >news center</a> to see when results are uploaded</p>
              <a href="" className="view_res">View result</a>
            </div>
          </div>
        </div>
      </section>

       <div className="container_login">

			<div className="content_1" >

				<div className="back_icon" ><a href="google.com" ><i class="fa-solid fa-angle-left"></i></a></div>

				<div className="logo"><img src={Logo} alt='ec' /></div>

				<p className="welcome" >Welcome Back</p>

				<div className="header">Get back on <span>track</span></div>

				<div className="form" >

					<form method="post" action=" " autocomplete="on" >
					
				  		<input type="email" name="email" placeholder="E-mail" required /><br/>
						  <input type="password" name="password" placeholder="Password" required/><br/>
						  <p className="forgot" ><a href="google.com" >Forgot password?</a></p>

						  <button type="submit" >LOG IN</button>

					</form>

				</div>

			</div>

			<div className="content_2">

				<img src={Image3} alt='p'/>

			</div>

		</div>

    </div>
  )
}

export default Login