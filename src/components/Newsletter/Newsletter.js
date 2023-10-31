import React from 'react'

const Newsletter = () => {
  return (
    <section className="newsletter">
        <div className="container">
            <div className="section-title">
                <h2>Get News Updates By Signup</h2>
            </div>
            <form>
                <input type="email" required placeholder="username@domain.com" />
                <a className="btn-yellow" href="#">Subscribe<i className="fa-regular fa-arrow-up-right"></i></a>
            </form>
        </div>
    </section>
  )
}

export default Newsletter