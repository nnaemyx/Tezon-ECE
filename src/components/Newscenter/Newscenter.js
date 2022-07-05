import React from 'react'
import './Newscenter.css'
import Image4 from './image 4.png'

const Newscenter = () => {
  return (
    <div>
      <section className="container">
        <div className="row">
          <div className="col_1">
            <div className="news_text">
              <h1>Stay <span>updated</span> everyday and everytime</h1>
              <p>Get steady info and news, lecture timetable updates, newly uploaded pdfs and more</p>
              <a href="google.com" className="common_white_btn">NEWS CENTER</a>
            </div>
          </div>
          <div className="col_2">
            <img src={Image4} alt="img4"/>
          </div>
        </div>	
      </section>
    </div>
  )
}

export default Newscenter