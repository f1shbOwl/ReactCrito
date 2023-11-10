import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Showcase from '../components/Showcase/Showcase'
import Clients from '../components/Clients/Clients'
import Features from '../components/Features/Features'
import AboutCompany from '../components/AboutCompany/AboutCompany'
import OurServices from '../components/OurServices/OurServices'
import ChooseUs from '../components/ChooseUs/ChooseUs'
import ProjectCases from '../components/ProjectCases/ProjectCases'
import MeetOurTeam from '../components/MeetOurTeam/MeetOurTeam'
import Testimonial from '../components/Testimonial/Testimonial'
import ArticleNews from '../components/ArticleNews/ArticleNews'
import Newsletter from '../components/Newsletter/Newsletter'


const Home = () => {
  return (
    <main>
      <div>
        <Header />
        <Showcase />
        <Clients />
        <Features />
        <AboutCompany />
        <OurServices />
        <ChooseUs />
        <ProjectCases />
        <MeetOurTeam />
        <Testimonial />
        <ArticleNews />
        <Newsletter />
        <Footer />
      </div>
    </main>
  )
}

export default Home