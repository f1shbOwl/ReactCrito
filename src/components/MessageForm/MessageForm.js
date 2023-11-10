import React, { useState } from 'react'
import { useFormik } from 'formik'

const MessageForm = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [messageSent, setMessageSent] = useState('')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const form = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },

        onSubmit: async (values) => {
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(values)
            })

            switch (result.status) {
                case 200:
                    setMessageSent('Message sent!');
                    break;
                case 400:
                    setErrorMessage('400 bad request');
                    break;
                case 404:
                    setErrorMessage('404 not found');
                    break;
                case 409:
                    setErrorMessage('409 conflict');
                    break;
            }
        }
    })

  return (
    <section className="leave-message">
    <div className="container mt-3">
        <div className="section-title">
            <h2>Leave us a message</h2>
            <h2>for any information.</h2>
        </div>
        <form onSubmit={form.handleSubmit} noValidate>
            <div className="messageForm mb-3">
                <input className="form-input" type="text" name="name" value={form.values.name} onChange={form.handleChange} placeholder="Name*" />
            </div>
            <div className="messageForm mb-3">
                <input className="form-input" type="email" name="email" value={form.values.email} onChange={form.handleChange} required placeholder="Email*" />
            </div>
            <div className="messageForm mb-3">
            <textarea className="form-input" rows="5" name="message" value={form.values.message} onChange={form.handleChange} placeholder="Your Message*"></textarea>
            </div>
            <button className="btn-yellow" type="submit">Send Message<i className="fa-regular fa-arrow-up-right"></i></button>
            <p className="errorMessage">{errorMessage}</p>
            <p className="message">{messageSent}</p>
        </form>
    </div>
</section>
  )
}

export default MessageForm