import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { PROJECT_DETAIL } from "../../utils/data";
import Projectcard from "./Projectcard/Projectcard";
import Slider from "react-slick";
import "./Project.css";

const Project = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="experience-container" id="projects">
      <h5>Project Details</h5>

      <div className="experience-content">
        <div className="arrow-right" onClick={slideRight}>
          <FaChevronRight />
        </div>

        <div className="arrow-left" onClick={slideLeft}>
          <FaChevronLeft />
        </div>

        <Slider ref={sliderRef} {...settings}>
          {PROJECT_DETAIL.map((item) => (
            <Projectcard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Project;
