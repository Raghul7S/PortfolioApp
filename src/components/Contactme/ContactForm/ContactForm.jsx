import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './ContactForm.css'

const ContactForm = () => {

  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs
      .sendForm('service_uxkr5ym', 'template_77r12fl', form.current, {
        publicKey: 'I0DCi7Tg2QMMHGzso',
      })
      .then(
        () => {
          toast.success('Message sent successfully!', {
            position: 'top-right',
            autoClose: 1500,
            closeButton: false,
            hideProgressBar: true,
            className: 'custom-toast'
          });
          form.current.reset();
          setLoading(false)
        },
        () => {
          toast.error('Message sent failed!', {
            position: 'top-right',
            autoClose: 1500,
            closeButton: false,
            hideProgressBar: true,
            className: 'custom-toast'
          });
          setLoading(false)
        },
      );
  };
    
  return (
    <div className='contact-me'>
      <div className='about'>
        <form ref={form} onSubmit={sendEmail} className='form'>
          <label className='lable'>Name *</label>
          <input type="text" name="from_name" className='input' required/>

          <label className='lable'>Email *</label>
          <input type="email" name="from_email" className='input'required/>

          <label className='lable'>Message *</label>
          <textarea name="message" className='text-area' required/>
          <input type="submit" style={{cursor: loading ? 'not-allowed' : 'pointer'}} value={loading ? 'Sending...' : "Send"} disabled={loading} className='button'/>
      </form>
      </div>
      <ToastContainer />
  </div>
  )
}

export default ContactForm;