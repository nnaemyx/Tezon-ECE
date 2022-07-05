import React from 'react'
import './Ebook.css'
import Image5 from './image 5.png'

const Ebooks = () => {
  return (
    <div>
      <section class="e_book e_book-section">
        <div class="container">
          <div class="row reverse">
            <div class="col_2">
              <img src={Image5} alt="img5"/>
            </div>
            <div class="col_3">
              <div class="e_book_text">
                <h1>All your needed <span>resources</span> for study in one <br class="display_on_mobile"/> location, accessible anywhere.</h1>
                <p>Get access to engineering e-books and PDF's in just one click whenever and where ever you need them</p>
                <a href="" class="common_white_btn">See e-books</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Ebooks