import React from 'react'

import img_25mar from '../../assets/images/25mar.svg'
import img_17mar from '../../assets/images/17mar.svg'
import img_13mar from '../../assets/images/13mar.svg'
import { NavLink } from 'react-router-dom'

const ArticleNews = () => {
  return (
    <section className="article-and-news">
        <div className="container">
            <div className="section-title">
                <p>Article & News</p>
                <h2>Get Every Single Article & News<NavLink to="/News" className="btn-transparent">Browse Articles <i className="fa-regular fa-arrow-up-right"></i></NavLink></h2>
            </div>
            <div className="article-grid">
                <NavLink to="/NewsDetails" className="article">
                    <img src={img_25mar} alt="article content" />
                    <p>Business</p>
                    <h3>How To Use Digitalization In the Classroom</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </NavLink>
                <NavLink to="/NewsDetails" className="article">
                    <img src={img_17mar} alt="article content" />
                    <p>Business</p>
                    <h3>How To Implement Chat GPT In Your Projects</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </NavLink>
                <NavLink to="/NewsDetails" className="article">
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