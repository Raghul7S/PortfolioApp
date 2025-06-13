import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

import './ContactForm.css'

const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_uxkr5ym', 'template_77r12fl', form.current, {
        publicKey: 'I0DCi7Tg2QMMHGzso',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    
  return (
    <div className='contact-me'>
      <div className='about'>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="from_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
      </form>
      </div>
  </div>
  )
}

export default ContactForm