import React from 'react'
import './Ebook.css'


const Ebooks = () => {
  return (
    <div>
      <section className="e_envelope" style="background-image: url(src/assests/images/Oval.png);">
        <div className="e_container">
          <div className="e_row">
            <div className="col_3">
              <img src="src/assests/images/image 5.png"/>
            </div>
            <div className="col_4">
              <h1>All your needed <span>resources</span> for study in one location, accessible anywhere.</h1>
              <p>Get access to engineering e-books and PDF's in just one click whenever and where ever you need them.</p>
              <a href="">See e-books</a>
            </div>
          </div>
        </div>
    	</section>
    </div>
  )
}

export default Ebooks