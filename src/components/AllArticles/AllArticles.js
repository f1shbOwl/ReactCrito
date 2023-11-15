import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


function AllArticles() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles()
    }, [])


    const getArticles = async () => {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
        setArticles(await result.json())
    }

  return (
    <div className="articles">
        <div className="container">
            <div className="section-title">
                <h2>Our News & Articles</h2>
            </div>
            
            <div className="article-grid">
                {articles.map(article => (
                    <NavLink to={`/NewsDetails/${article.id}`} className="article" key={article.id}>
                        <img src={article.imageUrl}></img>
                        <p>{article.category}</p>
                        <h3>{article.title}</h3>
                        <p>{article.content}</p>
                    </NavLink>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AllArticles