import React from "react";
import Slider from "react-slick";
import CourseApi from "./CourseApi";
import "./Courses.css";
import "../animations/Animations.css"
import img1 from "../../assest/fav.png";

function Courses() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 1000,
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
    <div className="course-container">
      <div className="course-info">
        <img src={img1} alt="course"/>
        <h1>Who is internee.PK?</h1>
        <p>
          The ultimate platform designed to turbocharge the IT sector in
          Pakistan! We recognize the immense potential of talented individuals
          in the country and aim to bridge the gap between them and the thriving
          IT industry. Internee.pk offers a comprehensive range of virtual
          internship opportunities exclusively in the IT field.
        </p>
        <i className="fa fa-arrow-down img-animation"></i>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {CourseApi.map((item) => {
            return (
              <div className="course-card">
                <img src={item.img} className="course-image" alt="courses"/>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <button className="enroll-btn">Enroll Now</button>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Courses;
