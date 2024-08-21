import React from "react";
import Slider from "react-slick";
import CourseApi from "./CourseApi";
import './Courses.css'

function Courses() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    // centerPadding: '20px',
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {CourseApi.map((item) => {
          return (
            <div className="course-card">
              <img src={item.img} className="course-image" />
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <button className="enroll-btn">Enroll Now</button>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Courses;
