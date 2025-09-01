import React from 'react'
import './ContactInfoCard.css'

const ContactInfoCard = ({iconUrl, text, style}) => {
  return (
    <div className='contact-details-card' style={style}>
        <div className="icon">
            <img src={iconUrl} alt={text} />
        </div>

        <p>{text}</p>
    </div>
  )
}

export default ContactInfoCard