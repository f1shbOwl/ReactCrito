import React from 'react'

import img_thumbsUp from '../../assets/images/thumbs-up-icon.svg'
import img_diamondIcon from '../../assets/images/diamond-icon.svg'
import img_experience from '../../assets/images/Experience-design-icon.svg'
import img_aiIcon from '../../assets/images/AI-icon.svg'
import img_chooseUs from '../../assets/images/choose-us-image.svg'

const ChooseUs = () => {
  return (
    <section className="why-choose-us">
        <div className="container">
            <div className="content-left col-4">
                <p>Why Choose Us</p>
                <h2>Why We Are The Best Business Consulting Agency</h2>
                <div className="icon-group">
                    <div className="icon">
                        <img src={img_thumbsUp} alt="image showing a thumbs-up icon" />
                    </div>
                    <div className="icon-text">
                        <h3>Process Excellence</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="icon">
                        <img src={img_diamondIcon} alt="image showing a diamond-icon" />
                    </div>
                    <div className="icon-text">
                        <h3>Strategic Planning</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="icon">
                        <img src={img_experience} alt="image showing an icon" />
                    </div>
                    <div className="icon-text">
                        <h3>Experience Design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="icon">
                        <img src={img_aiIcon} alt="image showing an icon of a cogwheel inside a head" />
                    </div>
                    <div className="icon-text">
                        <h3>Artificial Intelligence</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
            <div className="content-right col-6">
                <div className="background-box"></div>
                <img src={img_chooseUs} alt="två kvinnor sitter och diskuterar" />
            </div>
        </div>
     </section>
  )
}

export default ChooseUs