import React from 'react'

import img_businessArticle from '../../assets/images/business-article.svg'
import img_responsiveArticle from '../../assets/images/responsive-article.svg'
import img_educateArticle from '../../assets/images/educate-article.svg'
import img_insightArticle from '../../assets/images/insight-article.svg'

const ProjectCases = () => {
  return (
    <section className="project-and-cases">
        <div className="container">
            <div className="section-title">
                <p>Project & Case Studies</p>
                <h2>Let's Look At Our Global Projects</h2>
            </div>
            <div className="projects">
                <a className="article" href="#">
                    <img src={img_businessArticle} alt="article image" />
                    <h3>Grow your business</h3>
                    <div>Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                </a>
                <a className="article" href="#">
                    <img src={img_responsiveArticle} alt="article image" />
                    <h3>Why your client needs a responsive website</h3>
                    <div>Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                </a>
                <a className="article" href="#">
                    <img src={img_educateArticle} alt="article image" />
                    <h3>Educate your employees to get better results</h3>
                    <div>Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                </a>
                <a className="article" href="#">
                    <img src={img_insightArticle} alt="article image" />
                    <h3>Business Insights is a important piece of your business</h3>
                    <div>Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                </a>
            </div>
            <div className="center-content">
                <a className="btn-black" href="#">All Recent Projects <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
     </section>
  )
}

export default ProjectCases