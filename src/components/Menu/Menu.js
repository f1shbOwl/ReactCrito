import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div class="menu">
        <div class="top-menu">
            <div class="contact-information">
                <div class="contact-box">
                    <i class="fa-regular fa-phone-volume"></i>
                    +46 (8) 121 470 50
                </div>
                <div class="contact-box">
                    <i class="fa-regular fa-envelope"></i>
                    info@crito.com
                </div>
                <div class="contact-box last">
                    <i class="fa-sharp fa-regular fa-location-dot"></i>
                    Sveavägen 31, 111 34 STOCKHOLM
                </div>
            </div>
            <div class="social-media">
                <a href="https://facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="https://instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
        <div class="main-menu">
            <nav>
                <a class="active" href="index.html">Home</a>
                <a href="services.html">Service</a>
                <a href="news.html">News</a>
                <a href="contact.html">Contact</a>
            </nav>
            <a class="btn-yellow btn-login" href="#">Login <i class="fa-regular fa-arrow-up-right"></i></a>
        </div>
    </div>
  )
}

export default Menu