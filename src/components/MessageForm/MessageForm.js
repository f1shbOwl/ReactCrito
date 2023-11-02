import React from 'react'

const MessageForm = () => {
  return (
    <section class="leave-message">
    <div class="container mt-3">
        <div class="section-title">
            <h2>Leave us a message</h2>
            <h2>for any information.</h2>
        </div>
        <form class="form mb-3">
            <input class="form-input" type="text" placeholder="Name*" />
        </form>
        <form class="form mb-3">
            <input class="form-input" type="email" required placeholder="Email*" />
        </form>
        <form class="form mb-3">
        <textarea class="form-input" rows="5" placeholder="Your Message*"></textarea>
        </form>
        <a class="btn-yellow" href="#">Send Message<i class="fa-regular fa-arrow-up-right"></i></a>
    </div>
</section>
  )
}

export default MessageForm