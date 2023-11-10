import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Newsletter from '../components/Newsletter/Newsletter'
import NewsTop from '../components/NewsTop/NewsTop'

const NewsDetails = () => {
  return (
    <main>
        <div>
            <Header />
            <NewsTop />
            <div>Placeholder News</div>
            <Newsletter />
            <Footer />
        </div>
    </main>
  )
}

export default NewsDetails