import React from "react";
import "./Mobilenav.css";

export const Mobilenav = ({ isOpen, toggleMenu }) => {
  const redirectToResume = () => {
    window.open(
      "https://drive.google.com/file/d/1tLOqXt3BCNb7alsVL7EfhC2-WVCSSu81/view?usp=sharing"
    );
  };

  return (
    <>
      <div
        className={`mobile-menu  ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <h1 className="logo" style={{ color: "white" }}>
            RAGHUL V
          </h1>

          <ul>
            <li>
              <a className="menu-item" href="#hero">
                Home
              </a>
            </li>

            <li>
              <a className="menu-item" href="#skills">
                Skills
              </a>
            </li>

            <li>
              <a className="menu-item" href="#experience">
                Experience
              </a>
            </li>

            <li>
              <a className="menu-item" href="#projects">
                Projects
              </a>
            </li>

            <li>
              <a className="menu-item" href="#contact">
                Contact Me
              </a>
            </li>

            <button className="contact-btn" onClick={redirectToResume}>
              Resume
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};
