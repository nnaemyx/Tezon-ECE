import React from 'react'

import './Results.css'
import Image6 from './image 6.png'
import Image3 from './image 3.png'
import Logo from '../Navbar/ECE LOGO With TEXT.png'



const Login = () => {
  return (
    <div>

      <section className="result result-section">
        <div className="container">
          <div className="row reverse">
            <div className="col_2">
              <img src={Image6} alt="img6"/>
            </div>
            <div className="col_3">
              <div className="result_text">
                <h1>Get your presonal semester <span>results</span> here with just one click.</h1>
                <p>Don't worry, only YOU can see your own result. Visit the <a href="google.com">news center</a> to see when results are uploaded</p>
                <a href="google.com" className="common_white_btn">VIEW RESULTS</a>
              </div>
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