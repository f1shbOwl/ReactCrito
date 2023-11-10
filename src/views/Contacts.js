import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import LetsConnect from '../components/LetsConnect/LetsConnect'
import Contact from '../components/Contact/Contact'
import MessageForm from '../components/MessageForm/MessageForm'
import LocationMap from '../components/LocationMap/LocationMap'

const Contacts = () => {
  return (
    <main>
      <div>
        <Header />
        <LetsConnect />
        <Contact />
        <MessageForm />
        <LocationMap />
        <Footer />
      </div>
    </main>
  )
}

export default Contacts