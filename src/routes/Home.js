import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Ebooks from '../components/E-books/Ebooks'
import Newscenter from '../components/Newscenter/Newscenter'
import Results from '../components/Results/Results'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Ebooks/>
      <Newscenter/>
      <Results/>
      <Footer/>
    </div>
  )
}

export default Home