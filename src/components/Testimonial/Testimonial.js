import React from 'react'

import img_Star from '../../assets/images/Star.svg'
import img_Cassandra from '../../assets/images/Cassandra.svg'
import img_Amanda from '../../assets/images/Amanda.svg'
import img_Jack from '../../assets/images/Jack.svg'

const Testimonial = () => {
  return (
    <section className="testimonial">
        <div className="container">
            <div className="section-title">
                <p>Testimonial</p>
                <h2>What Our Clients Says</h2>
            </div>
            <div className="cards-text">
                <div>
                <img src={img_Star} alt="image showing five stars for rating" />
                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                </div>
                <div>
                <img src={img_Star} alt="image showing five stars for rating" />
                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                </div>
                <div>
                <img src={img_Star} alt="image showing five stars for rating" />
                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                </div>
            </div>
            <div className="card-names-container">
                <div className="card-names">
                    <img src={img_Cassandra} alt="bild på Cassandra" />
                    <div>
                        <h3>Cassandra Warren</h3>
                        <span>Business Manager, Dorfus</span>
                    </div>
                </div>
                <div className="card-names">
                    <img src={img_Amanda} alt="bild på Amanda" />
                    <div>
                        <h3>Amanda Tulling</h3>
                        <span>Senior Developer, Square</span>
                    </div>
                </div>
                <div className="card-names">
                    <img src={img_Jack} alt="bild på Jack" />
                    <div>
                        <h3>Jack McDogglas</h3>
                        <span>Key Account Manager, Gobona </span>
                    </div>
                </div>
            </div>
            <div className="center-content">
                <a className="btn-black" href="#">All Reviews <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
     </section>
  )
}

export default Testimonial