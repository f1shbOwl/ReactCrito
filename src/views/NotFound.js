import React from 'react'
import Footer from '../components/Footer/Footer'
import { NavLink } from 'react-router-dom'
import img_notFound from '../assets/images/robotPassedOut.png'

const NotFound = () => {
  return (
    <div className="notFound">
      <div className='container'>
        <h1>Dude, where's my page?</h1>
        <NavLink to="/" className='btn-yellow'>Go back home <i className="fa-regular fa-arrow-up-right"></i></NavLink>
        <img src={img_notFound}></img>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound