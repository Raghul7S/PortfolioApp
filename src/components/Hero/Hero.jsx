import React from 'react'
import  './Hero.css'

const Hero = () => {
  return (    
    <section className='hero-container' id='hero'>
      <div className='hero-content'>
        <h2>Building Digital Experience That Inspire.</h2>
        <p>
        Passionate Fullstack Developer in MERN | Front-End Developer in Mobile App Development | Transforming Ideas into Seamless and Visually Stunning Web Solutions | Team Collaborator | Strong expertise in building responsive applications using React.js and React Native | Proven ability to collaborate with UI/UX teams to create user-centric designs and improve functionality
        </p>
        <div className='about-me'>
          <h4>About Me</h4>
          <div className='details'>
            <ul className='list-one'>
              <li>Name</li>
              <li>Date of Birth</li>
              <li>Qualification</li>
              <li>Email</li>
              <li>Mobile</li>
              <li>Loaction</li>
            </ul>
            <ul className='list-two'>
              <li>V. Raghul</li>
              <li>07/04/2003</li>
              <li>B.Sc (Mathematics)</li>
              <li>raghulvairavaraj@gmail.com</li>
              <li>+91 9345874415</li>
              <li>Keelapavoor, Tenkasi</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='hero-img'>
        <div>
          <div className='top'>
          <div div className="tech-icon">
            <img src="./assets/react-img.png"  alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/nodejs-img.png"  alt="" />
          </div>
          </div>
          <img src="./assets/Me.jpg" className='me' alt="" />
          </div>
      

      <div>
        <div className='tech-icon'>
          <img src="./assets/html-img.png" alt="" />
        </div>
        <div className='tech-icon'>
          <img src="./assets/css-img.png" alt="" />
        </div>
        <div className='tech-icon'>
          <img src="./assets/js-img.png" alt="" />
        </div>
        
      </div>
      </div>

    </section>
  )
}

export default Hero