import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, subject, preview, link }) => {
  return (
    <div style={styles.card}>
      <img src={preview} alt={title} style={styles.image} />
      <div style={styles.textWrapper}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.subject}>
          {subject}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <FaGithub style={styles.icon} />
          </a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    marginTop:'1rem',
    background: "#130f2a",
    border: "1.5px solid #6751b9",
    borderRadius: "12px",
    overflow: "hidden",
    width: "300px",
    color: "#ffffff",
    transition: "transform 0.3s ease",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderBottom: "1px solid #6751b9",
  },
  textWrapper: {
    padding: "16px",
  },
  title: {
    fontSize: "1.1rem",
    marginBottom: "8px",
  },
  subject: {
    fontSize: "0.95rem",
    color: "#cfcfcf",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconLink: {
    paddingTop: "10px",
    color: "#cfcfcf",
    textDecoration: "none",
  },
  icon: {
    fontSize: "2rem",
    transition: "color 0.3s ease",
  },
};

export default ProjectCard;
