import React from 'react'
import './Results.css'
import Image6 from './image 6.png'

const Results = () => {
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
    </div>
  )
}

export default Results