import React from 'react'


const Features = () => {
  return (
    <section className="features">
        <div className="container">
            <div className="content-left">
                <p>Features</p>
                <h2>Our Accounting is trusted by thousand of companies</h2>
                <a className="btn-yellow" href="#">Learn More <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
            <div className="content-right">
                <div>
                    <i className="fa-light fa-handshake"></i>
                    <h3>Business Advice</h3>
                    <p className="lorem">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <i className="fa-regular fa-lightbulb-on"></i>
                    <h3>Startup business</h3>
                    <p className="lorem">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <i className="fa-sharp fa-solid fa-chart-mixed-up-circle-dollar"></i>
                    <h3>Financial advice</h3>
                    <p className="lorem">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <i className="fa-sharp fa-light fa-triangle-exclamation"></i>
                    <h3>Risk Management</h3>
                    <p className="lorem">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
     </section>
  )
}

export default Features