import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
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
            <div style={{ backgroundColor: '#F0EFE9'}}><ArticleNews /></div>
            <Footer />
        </div>
    </main>
  )
}

export default NewsDetails