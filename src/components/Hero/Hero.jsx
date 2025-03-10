import React from 'react'
import  './Hero.css'

const Hero = () => {
  return (    
    <section className='hero-container' id='hero'>
      <div className='hero-content'>
        <h2>Building Digital Experience That Inspire.</h2>
        <p>
        Professional front-end developer specializing in React.js and React Native with experience in building responsive web and mobile applications. Proficient in developing user-centric interfaces and delivering seamless user experiences. Skilled in problem-solving, collaborating effectively within teams.        </p>
        {/* <div className='about-me'>
          <h4>Personal Information</h4>
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
              <li>84, Keelapavoor, Tenkasi</li>
            </ul>
          </div>
        </div> */}
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