import React from 'react'

import img_25mar from '../../assets/images/25mar.svg'
import img_17mar from '../../assets/images/17mar.svg'
import img_13mar from '../../assets/images/13mar.svg'
import { NavLink } from 'react-router-dom'

const ArticleNews = () => {
  return (
    <section className="article-and-news article-news-details">
        <div className="container">
            <div className="section-title">
                <p>Article & News</p>
                <h2>Get Every Single Article & News<NavLink to="/News" className="btn-transparent">Browse Articles <i className="fa-regular fa-arrow-up-right"></i></NavLink></h2>
            </div>
            <div className="article-grid">
                <NavLink to="/NewsDetails/cb24396b-ae21-4c34-a267-d0cd0600aa6d" className="article">
                    <img src={img_25mar} alt="article content" />
                    <p>Business</p>
                    <h3>How To Use Digitalization In the Classroom</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </NavLink>
                <NavLink to="/NewsDetails/cc6c2b75-8ee7-4e4e-8a99-66fe89a4b789" className="article">
                    <img src={img_17mar} alt="article content" />
                    <p>Business</p>
                    <h3>How To Implement Chat GPT In Your Projects</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </NavLink>
                <NavLink to="/NewsDetails/228c829d-4f66-431f-bb20-1b3aed2869b6" className="article">
                    <img src={img_13mar} alt="article content" />
                    <p>Business</p>
                    <h3>The Guide To Support Modern CSS Design</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </NavLink>
            </div>
        </div>
        <div className="center-button">
            <a href="#"><span className="dot active"></span></a>
            <a href="#"><span className="dot"></span></a>
            <a href="#"><span className="dot"></span></a>
            <a href="#"><span className="dot"></span></a>
            <a href="#"><span className="dot"></span></a>
        </div>
    </section>
  )
}

export default ArticleNews