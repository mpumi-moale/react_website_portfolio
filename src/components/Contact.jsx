import React from 'react'

function Contact() {
  return (
    <div id='contact'>
        <div className="contact-heading">
            <h1>Get in Touch</h1>
            <p>Contact Me</p>
        </div>

        <div className="container contact_container">

            <form action="">
                <input type="text" name='name' placeholder='Full Name' required />
                <input type="email" name='email' placeholder='Email' required />
                <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                <button type='submit' className='submit-btn'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact