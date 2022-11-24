import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b10l1x8', 'template_veayuuq', form.current, 'feqRdjjC2Ft75Apgb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };
  return (
    <div id='contact'>
        <div className="contact-heading">
            <h1>Get in Touch</h1>
            <p>Contact Me</p>
        </div>

        <div className="container contact_container">

            <form ref={form} onSubmit={sendEmail}>
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