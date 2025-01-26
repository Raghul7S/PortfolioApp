import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='contact-me'>
          <div className='about'>
            <ul className='list-one'>
              <li>Name</li>
              <li>Email</li>
              <li>Phone</li>
              <li>Address</li>
            </ul>
            <ul className='list-two'>
              <li>V Raghul</li>
              <li>raghulvairavaraj@gmail.com</li>
              <li>+91 9345874415</li>
              <li>84, Keeraithotta Street, Keelapavoor 627806, Tenkasi, Tamil Nadu, India</li>
            </ul>
            <div className='icon-list'>
            <ul className='social-icon'>
              <li><a href="https://wa.me/919345874415"><img src="./assets/whatsapp-icon.png" /></a></li>
              <li><a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"><img src="./assets/linkedin-icon.png"  /></a></li>
              <li><a href="https://www.instagram.com/raghul7s/"><img src="./assets/instagram-icon.png"  /></a></li>
              <li><a href="https://www.facebook.com/raghul.vairavaraj"><img src="./assets/facebook-icon.png" /></a></li>
            </ul>
            </div>
          </div>
          
          
        </div>
  )
}

export default ContactForm