import React from 'react'
import { PROJECT_DETAIL } from '../../utils/data'
import ProjectCards from './ProjectCard/ProjectCards'
import './Projects.css'

const Projects = () => {
  return (
    <div className='projects-wrapper' id='projects'>
    <h5 className='projects-title'>Projects</h5>
    <div className='card-list'>
        {PROJECT_DETAIL.map((project, index)=>(
            <ProjectCards
            key={index}
            title={project.title}
            subject={project.subject}
            preview={project.preview}
            link={project.link}
            />
        ))}
    </div>
    </div>
  )
}

export default Projects