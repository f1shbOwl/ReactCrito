import React from 'react'

const OurServices = () => {
  return (
    <section className="our-services">
        <div className="container">
            <div className="section-title">
                <p>Our Services</p>
                <h2>We Provide The Best Service For Consulting</h2>
            </div>
            <div className="services-boxes">
                <div className="box">
                    <h3>Business Advice</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <a className="btn-round" href="#"><i className="fa-regular fa-arrow-right"></i></a>
                </div>
                <div className="box">
                    <h3>Startup Business</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <a className="btn-round" href="#"><i className="fa-regular fa-arrow-right"></i></a>
                </div>
                <div className="box">
                    <h3>Financial Advice</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <a className="btn-round" href="#"><i className="fa-regular fa-arrow-right"></i></a>
                </div>
                <div className="box">
                    <h3>Risk Management</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <a className="btn-round" href="#"><i className="fa-regular fa-arrow-right"></i></a>
                </div>
            </div>
            <div className="center-content">
                <a className="btn-transparent" href="#">Browse Services <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
     </section>
  )
}

export default OurServices