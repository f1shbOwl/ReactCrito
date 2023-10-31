import React from 'react'

import img_Kristine from '../../assets/images/Kristine.svg'
import img_Mark from '../../assets/images/Mark.svg'
import img_Kimberly from '../../assets/images/Kimberly.svg'
import img_Justin from '../../assets/images/Justin.svg'

const MeetOurTeam = () => {
  return (
    <section className="meet-our-team">
        <div className="container">
            <div className="section-title">
                <p>Meet Our Team</p>
                <h2>Experience Team Members <a className="btn-yellow" href="#">Browse Team<i className="fa-regular fa-arrow-up-right"></i></a></h2>
            </div>
            <div className="team">
                <div>
                    <img src={img_Kristine} alt="Image of Kristine Palmer" />
                    <h3>Kristine Palmer</h3>
                    <p>Chef Operation Officer</p>
                </div>
                <div>
                    <img src={img_Mark} alt="Image of Kristine Palmer" />
                    <h3>Mark Aubri</h3>
                    <p>Senior Consultant</p>
                </div>
                <div>
                    <img src={img_Kimberly} alt="Image of Kristine Palmer" />
                    <h3>Kimberly Hansen</h3>
                    <p>Senior Consultant</p>
                </div>
                <div>
                    <img src={img_Justin} alt="Image of Kristine Palmer" />
                    <h3>Justin Willoman</h3>
                    <p>Senior Tech Consultant</p>
                </div>
            </div>
            <div className="center-button">
                <a href="#"><span className="dot"></span></a>
                <a href="#"><span className="dot active"></span></a>
                <a href="#"><span className="dot"></span></a>
                <a href="#"><span className="dot"></span></a>
                <a href="#"><span className="dot"></span></a>
            </div>
        </div>
     </section>
  )
}

export default MeetOurTeam