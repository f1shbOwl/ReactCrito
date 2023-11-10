import React from 'react'
import { NavLink } from 'react-router-dom'

import img_footerLogo from '../../assets/images/footer-logo.svg'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-logo">
                <NavLink to="/"><img src={img_footerLogo} alt="crito footer logotype" /></NavLink>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
            </div>
            <div className="column">
                <h3>Company</h3>
                <NavLink to="/About">About</NavLink>
                <NavLink to="/Features">Features</NavLink>
                <NavLink to="/Works">Works</NavLink>
                <NavLink to="/Career">Career</NavLink>
            </div>
            <div className="column">
                <h3>Help</h3>  
                <NavLink to="/Support">Customer Support</NavLink>
                <NavLink to="/Delivery">Delivery Details</NavLink>
                <NavLink to="/TermsAndConditions">Terms & Conditions</NavLink>
                <NavLink to="/PrivacyPolicy">Privacy Policy</NavLink>
            </div> 
            <div className="column">
                <h3>Resources</h3>
                <NavLink to="/eBooks">Free eBooks</NavLink>
                <NavLink to="/DevelopmentTutorial">Development Tutorial</NavLink>
                <NavLink to="/HowToBlog">How to - Blog</NavLink>
                <NavLink to="/Youtube">Youtube Playlist</NavLink>
            </div> 
            <div className="column">
                <h3>Link</h3>           
                <NavLink to="/eBooks">Free eBooks</NavLink>
                <NavLink to="/DevelopmentTutorial">Development Tutorial</NavLink>
                <NavLink to="/HowToBlog">How to - Blog</NavLink>
                <NavLink to="/Youtube">Youtube Playlist</NavLink>
            </div>
        </div>
        <footer className="footer-bottom">
            <div className="copyright">
                <p>&copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
            </div>
            <div className="social-media">
                <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </footer>
    </footer>
  )
}

export default Footer