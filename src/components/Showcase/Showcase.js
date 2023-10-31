import React from 'react'
import './Showcase.css'

import img_ShowCaseImage from '../../assets/images/showcase-image.svg'

const Showcase = () => {
  return (
    <section className="showcase">
        <div className="container">
            <div className="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <a className="btn-yellow" href="#">Get Consulting <i className="fa-regular fa-arrow-up-right"></i></a>
                <a className="btn-transparent" href="#">Learn More <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
            <img src={img_ShowCaseImage} alt="image of a man in a suit with a tablet" />
        </div>
    </section>
  )
}

export default Showcase