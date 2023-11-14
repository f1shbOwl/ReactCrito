import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'


const MessageForm = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [messageSent, setMessageSent] = useState('')

    const form = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },

    
        validationSchema: Yup.object( {
            name: Yup.string()
                .matches(/^[A-Za-zÀ-ÿÇçÈ-ëÌ-ïÐðÑñÒ-õØøÙ-úÛûÜüÝýÞþ\s\-\.]*$/, "Invalid name format")
                .min(2, "Name must consist of atleast two characters")
                .required(),
            email: Yup.string()
                .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please use the format name@domain.com")
                .required(),
            message: Yup.string()
                .matches(/^[A-Za-zÀ-Öà-ö,.\s\-"'`]+(?:(?!\s{3}).)*$/, "Invalid format")
                .min(10, "Message must consist of atleast 10 characters")
                .required(),
        }),

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
                    form.resetForm();
                    setTimeout(() => {
                        setMessageSent('');
                    }, 3000);
                    break;
                case 400:
                    setErrorMessage('400 Bad Request');
                    break;
                case 404:
                    setErrorMessage('404 not found');
                    break;
                case 409:
                    setErrorMessage('409 conflict');
                    break;
                default:
                    setErrorMessage('Something went wrong')
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
            <label>{form.touched.name && form.errors.name ? form.errors.name: ''}</label>
            <div className="messageForm mb-2">
                <input className="form-input" type="text" name="name" value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur} placeholder="Name*" />
            </div>
            <label>{form.errors.email && form.touched.email ? form.errors.email: ''}</label>
            <div className="messageForm mb-2">
                <input className="form-input" type="email" name="email" value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur} required placeholder="Email*" />
            </div>
            <label>{form.errors.message && form.touched.message ? form.errors.message : ''}</label>
            <div className="messageForm mb-2">
            <textarea className="form-input" rows="5" name="message" value={form.values.message} onChange={form.handleChange} onBlur={form.handleBlur} placeholder="Your Message*"></textarea>
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