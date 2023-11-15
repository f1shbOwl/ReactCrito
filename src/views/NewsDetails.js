import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Newsletter from '../components/Newsletter/Newsletter'
import NewsTop from '../components/NewsTop/NewsTop'
import ArticleDetails from '../components/ArticleDetails/ArticleDetails'
import ArticleNews from '../components/ArticleNews/ArticleNews'

const NewsDetails = () => {
  return (
    <main>
        <div>
            <Header />
            <NewsTop />
            <ArticleDetails />
            <ArticleNews />
            <Newsletter />
            <Footer />
        </div>
    </main>
  )
}

export default NewsDetails