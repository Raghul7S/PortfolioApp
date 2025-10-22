import React, { useState } from "react";
import "./Navbar.css";
import { TbGridDots } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { Mobilenav } from "../MobileNav/Mobilenav";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const redirectToResume = () => {
    window.open(
      "https://drive.google.com/file/d/1CtnwOYgCzH8JEHTkBqLWKbmbNwIXbD8x/view?usp=sharing"
    );
  };

  return (
    <>
      <Mobilenav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <h1 className="logo" style={{ color: "white" }}>
            RAGHUL V
          </h1>

          <ul>
            <li>
              <Link className="menu-item" to="hero">
                Home
              </Link>
            </li>
            <li>
              <Link className="menu-item" to="skills">
                Skills
              </Link>
            </li>
            <li>
              <Link className="menu-item" to="experience">
                Experience
              </Link>
            </li>
            <li>
              <Link className="menu-item" to="projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="menu-item" to="contact">
                Contact Me
              </Link>
            </li>

            <button className="contact-btn" onClick={redirectToResume}>
              Resume
            </button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            {openMenu ? (
              <IoMdClose style={{ fontSize: "1.8rem" }} />
            ) : (
              <TbGridDots style={{ fontSize: "1.8rem" }} />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
