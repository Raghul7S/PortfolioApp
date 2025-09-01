import React, {useRef} from 'react';
import { FaChevronDown } from 'react-icons/fa';
import ContactInfoCard from './Contactinfocard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';
import './Contact.css';

const Contact = () => {
  const scrollRef = useRef(null);

  const handleScrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 200,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id='contact' className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content" data-aos="fade-down">
            <div className='infoCard'  ref={scrollRef}>
              <a href="mailto:raghulvairavaraj@gmail.com">  
               <ContactInfoCard
                    iconUrl={`${process.env.PUBLIC_URL}/assets/email-icon.png`}
                    text="raghulvairavaraj@gmail.com" 
                />
              </a> 
              <a href="https://www.linkedin.com/in/raghulv-appdev">
                <ContactInfoCard
                    iconUrl={`${process.env.PUBLIC_URL}/assets/linkedin-icon.png`}
                    text="linkedin.com/in/raghulv-appdev" 
                />
              </a>
              <a href="https://wa.me/9345874415">
                <ContactInfoCard
                    iconUrl={`${process.env.PUBLIC_URL}/assets/whatsapp-icon.png`}
                    text="+91 9345874415" 
                />
              </a>
              <a href="https://github.com/Raghul7S">
                <ContactInfoCard
                    iconUrl={`${process.env.PUBLIC_URL}/assets/github-icon.png`}
                    text="https://github.com/Raghul7S" 
                    style={{marginBottom: 0}}
                />
              </a>
            </div>
            <div className='scroll-down' onClick={handleScrollDown}>
                <FaChevronDown />
              </div>
            <div style={{flex:1}}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default Contact 