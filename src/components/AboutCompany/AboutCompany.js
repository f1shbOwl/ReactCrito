import React from 'react'
import '../../index.css'

import img_about from '../../assets/images/about-image.svg'

const AboutCompany = () => {
  return (
    <section className="about-company">
        <div className="container">
            <div className="column-left">
                <div className="founder-textbox">
                    <h3>Samantha Brown, <span>Founder</span></h3>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                </div>
                <img src={img_about} alt="image of a woman holding a laptop" />
            </div>
            <div className="column-right">
                <div className="section-title">
                    <p>About Company</p>
                    <h2>We Are Business Consulting & Credit Repair Experts</h2>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                    </div>
                </div>
                <div className="buttons">
                    <a className="btn-black" href="#">Learn More <i className="fa-regular fa-arrow-up-right"></i></a>
                    <a className="btn-round" href="#"><i className="fa-sharp fa-solid fa-play"></i></a> <span>Intro Video</span>
                </div>
            </div>
        </div>
     </section>
  )
}

export default AboutCompany