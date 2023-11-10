import React from 'react'
import { NavLink } from 'react-router-dom'

const NewsTop = () => {
  return (
    <section className="newsTop">
    <div className="container">
        <div className="content">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/News" >News</NavLink>
            <h1>News & Articles</h1>  
        </div>
    </div>
</section>
  )
}

export default NewsTop