import { Typewriter } from "react-simple-typewriter";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container" id="hero">
      <div className="hero-content">
        <h2>
          <Typewriter
            words={["Building Visually Appealing Web and Mobile Apps."]}
            loop={1}
            cursor
            typeSpeed={80}
            deleteSpeed={50}
          />
        </h2>
        <p>
          Professional front-end developer specializing in React.js and React
          Native with experience in building responsive web and mobile
          applications. Proficient in developing user-centric interfaces and
          delivering seamless user experiences. Skilled in problem-solving,
          collaborating effectively within teams. Efficient in using AI tools to 
          boost productivity and simplify debugging.{" "}
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="top">
            <div div className="tech-icon">
              <img src="./assets/react-img.png" alt="" />
            </div>
            <div className="tech-icon">
              <img src="./assets/nodejs-img.png" alt="" />
            </div>
          </div>
          <img src="./assets/Me.jpg" className="me" alt="" />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/html-img.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/css-img.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/js-img.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
