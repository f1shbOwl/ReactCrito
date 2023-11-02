import React from 'react'
import { NavLink } from 'react-router-dom'

const LetsConnect = () => {
  return (
    <section className="showcase">
    <div className="container">
        <div className="content">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Contacts" >Contact</NavLink>
            <h1>Let's Connect</h1>  
        </div>
    </div>
</section>
  )
}

export default LetsConnect