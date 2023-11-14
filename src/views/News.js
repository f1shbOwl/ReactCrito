import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Newsletter from '../components/Newsletter/Newsletter'
import NewsTop from '../components/NewsTop/NewsTop'
import AllArticles from '../components/AllArticles/AllArticles'

const News = () => {
  return (
    <main>
        <div>
            <Header />
            <NewsTop />
            <AllArticles />
            <Newsletter />
            <Footer />
        </div>
    </main>
  )
}

export default News