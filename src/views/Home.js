import React from 'react'
import Header from '../components/Header/Header'
import Showcase from '../components/Showcase/Showcase'
import Clients from '../components/Clients/Clients'
import Features from '../components/Features/Features'

const Home = () => {
  return (
    <div>
        <Header />
        <Showcase />
        <Clients />
        <Features />
    </div>
  )
}

export default Home