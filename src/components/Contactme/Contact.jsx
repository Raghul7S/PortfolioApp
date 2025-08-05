import React from 'react'
import './Contact.css'
import ContactInfoCard from './Contactinfocard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const Contact = () => {
  return (
    <section className="contact-container">
        <h5 id='contact'>Contact Me</h5>

        <div className="contact-content" data-aos="fade-down">
            <div div style={{flex:1}}>
              <a href="mailto:raghulvairavaraj@gmail.com">  
              <ContactInfoCard
                    iconUrl={`${process.env.PUBLIC_URL}/assets/email-icon.png`}
                    text="raghulvairavaraj@gmail.com" 
                />
               </a> 
                <a href="https://github.com/Raghul7S">
                <ContactInfoCard
                    iconUrl={`${process.env.PUBLIC_URL}/assets/github-icon.png`}
                    text="https://github.com/Raghul7S" 
                />
                </a>
            </div>
            <div style={{flex:1}}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default Contact 