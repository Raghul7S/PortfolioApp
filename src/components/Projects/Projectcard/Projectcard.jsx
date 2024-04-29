import React from 'react'
import './Projectcard.css'

const Projectcard = ({details}) => {
  return (
    <div className='project-card'>
        <h6>{details.title}</h6>
        <div className="project-subject">{details.subject}</div>

        <ul>
            {details.responsibilities.map((item)=>(
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Projectcard