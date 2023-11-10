import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="menu">
        <div className="top-menu">
            <div className="contact-information">
                <div className="contact-box">
                    <i className="fa-regular fa-phone-volume"></i>
                    +46 (8) 121 470 50
                </div>
                <div className="contact-box">
                    <i className="fa-regular fa-envelope"></i>
                    info@crito.com
                </div>
                <div className="contact-box last">
                    <i className="fa-sharp fa-regular fa-location-dot"></i>
                    Sveavägen 31, 111 34 STOCKHOLM
                </div>
            </div>
            <div className="social-media">
                <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
        <div className="main-menu">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Services">Service</NavLink>
                <NavLink to="/News">News</NavLink>
                <NavLink to="/Contacts">Contact</NavLink>
            </nav>
            <a className="btn-yellow btn-login" href="#">Login <i className="fa-regular fa-arrow-up-right"></i></a>
        </div>
    </div>
  )
}

export default Menu