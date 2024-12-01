import React, {useRef} from 'react';
import './Experience.css'
import { WORK_EXPERIENCE } from '../../Utils/data'
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ExperienceCard from './ExperienceCard/ExperienceCard';


const Experience = () => {
    
    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite:false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive:[
            {
                breakpoint: 769,
                settings:{
                    slidesToShow:1,
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
    }

  return (
    <section className='experience-container' id='projects'>
        <h5>Experience Details</h5>

        <div className="experience-content">

            <div className="arrow-right" onClick={slideRight}>
                <FaChevronRight />
            </div>

            <div className="arrow-left" onClick={slideLeft}>
                <FaChevronLeft />
            </div>

            <Slider ref={sliderRef} {...settings}>
            {WORK_EXPERIENCE.map((item)=>(
                <ExperienceCard key={item.title} details={item}/>
            ))}
            </Slider>
        </div>
    </section>
  )
}

export default Experience