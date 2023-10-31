import React from 'react'
import './Features.css'

const Features = () => {
  return (
    <section ClassName="features">
        <div ClassName="container">
            <div ClassName="content-left">
                <p>Features</p>
                <h2>Our Accounting is trusted by thousand of companies</h2>
                <a ClassName="btn-yellow" href="#">Learn More <i ClassName="fa-regular fa-arrow-up-right"></i></a>
            </div>
            <div ClassName="content-right">
                <div>
                    <i ClassName="fa-light fa-handshake"></i>
                    <h3>Business Advice</h3>
                    <p ClassName="lorem">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <i ClassName="fa-regular fa-lightbulb-on"></i>
                    <h3>Startup business</h3>
                    <p ClassName="lorem">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <i ClassName="fa-sharp fa-solid fa-chart-mixed-up-circle-dollar"></i>
                    <h3>Financial advice</h3>
                    <p ClassName="lorem">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <i ClassName="fa-sharp fa-light fa-triangle-exclamation"></i>
                    <h3>Risk Management</h3>
                    <p ClassName="lorem">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
     </section>
  )
}

export default Features