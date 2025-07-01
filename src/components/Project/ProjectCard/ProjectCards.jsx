import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import './ProjectCards.css';

const ProjectCard = ({ title, subject, preview, link, overview }) => {
  return (
    <div className="card">
      <div className="image-wrapper">
        <img src={preview} alt={title} className="image" />
        <div className="overlay">
          <div className="overlay-text">
            {overview.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      </div>
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
            <FaArrowCircleRight className="icon" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;