import React from "react";
import { FaGithub } from "react-icons/fa";
import "./Projectcard.css";

const Projectcard = ({ details }) => {
  return (
    <div className="project-card">
      <div className="title-icon">
        <h6>{details.title}</h6>
        <a
          href={details.link}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <FaGithub className="github-icon" />
        </a>
      </div>
      <div className="project-subject">{details.subject}</div>

      <ul>
        {details.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projectcard;
