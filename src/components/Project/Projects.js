import React from 'react'
import { PROJECT_DETAIL } from '../../utils/data'
import ProjectCards from './ProjectCard/ProjectCards'

const Projects = () => {
  return (
    <div>
    <h5 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '2rem'}}>Projects</h5>
    <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
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