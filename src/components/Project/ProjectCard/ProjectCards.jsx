import React from "react";
import { FaGithub } from "react-icons/fa";
import './ProjectCards.css'

const ProjectCard = ({ title, subject, preview, link }) => {
  return (
    <div className="card">
      <img src={preview} alt={title} className="image"/>
      <div className="text-wrapper">
        <h3 className="title">{title}</h3>
        <p className="subject">
          {subject}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaGithub className="icon" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
