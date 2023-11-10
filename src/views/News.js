import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Newsletter from '../components/Newsletter/Newsletter'
import NewsTop from '../components/NewsTop/NewsTop'

const News = () => {
  return (
    <main>
        <div>
            <Header />
            <NewsTop />
            <div>Placeholder Articles</div>
            <Newsletter />
            <Footer />
        </div>
    </main>
  )
}

export default News