import React from "react";
import "./Courses.css";
import "./Allcourses.css";
import img1 from "../../assest/fav.png";
import CourseApi from "./CourseApi";
import LMS from "../lms/LMS.js";
import Portal from "../portal/Portal.js";

function Allcourses() {
  return (
    <div className="course-container">
      <div className="course-info">
        <img src={img1} alt="course" />
        <h1>Who is internee.PK?</h1>
        <p>
          The ultimate platform designed to turbocharge the IT sector in
          Pakistan! We recognize the immense potential of talented individuals
          in the country and aim to bridge the gap between them and the thriving
          IT industry. Internee.pk offers a comprehensive range of virtual
          internship opportunities exclusively in the IT field.
        </p>
        <i class="fa fa-arrow-down"></i>
      </div>
      <div className="all-courses">
        {CourseApi.map((item) => {
          return (
            <div className="all-course-card">
              <img src={item.img} className="all-course-img" alt="courses" />
              <h1>{item.name}</h1>
              <button className="">Enroll Now</button>
            </div>
          );
        })}
      </div>
      <LMS />
      <Portal />
    </div>
  );
}

export default Allcourses;
